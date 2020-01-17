var request = require('request');
var fs = require("fs");
var path = require("path");
var unzip = require("unzipper");
var mkdirp = require("mkdirp");
var protoc = require("../protoc.js");

var releases = {
  "win32_x86_32": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-win32.zip",
  "win32_x86_64": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-win32.zip",
  "linux_x86_32": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-linux-x86_32.zip",
  "linux_x86_64": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-linux-x86_64.zip",
  "darwin_x86_32": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-osx-x86_32.zip",
  "darwin_x86_64": "https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-osx-x86_64.zip"
};

var platform = process.platform;
var arch = process.arch === "x64" ? "x86_64" : "x86_32";
var release = platform + "_" + arch;

if (releases[release]) {
  request(releases[release])
    .pipe(unzip.Parse())
    .on("entry", function(entry) {
      var isFile = "File" === entry.type;
      var isDir = "Directory" === entry.type;
      var fullpath = path.join(__dirname, "..", "protoc", entry.path);
      var directory = isDir ? fullpath : path.dirname(fullpath);

      mkdirp(directory, function(err) {
        if (err) throw err;
        if (isFile) {
          entry.pipe(fs.createWriteStream(fullpath))
          .on("finish", function() {
            if (protoc === fullpath) {
              fs.chmod(fullpath, 0o755, function(err) {
                if (err) throw err;
              });
            }
          });
        }
      });
    });
} else {
  throw new Error("Unsupported platform. Was not able to find a proper protoc version.");
}
