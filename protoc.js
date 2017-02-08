var path = require("path");

var protoc_bin = path.join(__dirname, "protoc", "bin");

module.exports = path.join(protoc_bin, "protoc" + (process.platform === "win32" ? ".exe" : ""));
