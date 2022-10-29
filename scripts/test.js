const protoc = require("../index.js");
protoc.library(["protoc/include/google/protobuf/timestamp.proto"], function(err, files) {
  if (err) {
    console.error(err);
    return;
  }
});
