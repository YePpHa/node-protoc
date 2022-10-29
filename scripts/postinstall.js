const fs = require("fs");
const path = require("path");
const unzip = require("unzipper");
const mkdirp = require("mkdirp");
const protoc = require("../protoc.js");

const protoVersion = "3.20.3";

const releases = {
  "win32_x86_32": `https://github.com/protocolbuffers/protobuf/releases/download/v${protoVersion}/protoc-${protoVersion}-win32.zip`,
  "win32_x86_64": `https://github.com/protocolbuffers/protobuf/releases/download/v${protoVersion}/protoc-${protoVersion}-win32.zip`,
  "linux_x86_32": `https://github.com/protocolbuffers/protobuf/releases/download/v${protoVersion}/protoc-${protoVersion}-linux-x86_32.zip`,
  "linux_x86_64": `https://github.com/protocolbuffers/protobuf/releases/download/v${protoVersion}/protoc-${protoVersion}-linux-x86_64.zip`,
  "darwin_x86_64": `https://github.com/protocolbuffers/protobuf/releases/download/v${protoVersion}/protoc-${protoVersion}-osx-x86_64.zip`
};

const platform = process.platform;
const arch = process.arch === "x64" ? "x86_64" : "x86_32";
const release = platform + "_" + arch;
const protocDirectory = path.join(__dirname, "..", "protoc");

(async () => {
  if (!releases[release]) {
    throw new Error(`Unsupported platform: ${release}. Was not able to find a proper protoc version.`);
  }

  fs.rmSync(protocDirectory, { recursive: true, force: true });

  const fetch = await import("node-fetch");
  const response = await fetch.default(releases[release]);
  response
    .body
    .pipe(unzip.Parse())
    .on("entry", entry => {
      const isFile = "File" === entry.type;
      const isDir = "Directory" === entry.type;
      const fullpath = path.join(protocDirectory, entry.path);
      const directory = isDir ? fullpath : path.dirname(fullpath);

      mkdirp(directory, err => {
        if (err) {
          throw err;
        }
        if (isFile) {
          entry.pipe(fs.createWriteStream(fullpath))
          .on("finish", function() {
            if (protoc === fullpath) {
              fs.chmod(fullpath, 0o755, function(err) {
                if (err) {
                  throw err;
                }
              });
            }
          });
        }
      });
    });
})();
