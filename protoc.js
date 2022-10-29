const path = require("path");

const protoc_bin = path.join(__dirname, "protoc", "bin");

module.exports = path.join(protoc_bin, "protoc" + (process.platform === "win32" ? ".exe" : ""));
