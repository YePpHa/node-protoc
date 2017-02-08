# Protocol Buffers for Node
A wrapper in Node for the compiled protoc from https://github.com/google/protobuf.

## Platforms
Google only provides binary files for Windows, Linux and OSX in x86_64 and x86_32.

## Examples
There's currently no documentation. Hopefully this example will help.

```JavaScript
var protoc = require("protoc");

protoc.library(["path/to/file.proto", "path/to/file2.proto"], function(err, files) {
  if (err) return console.error(err);
  
  // Handle the JavaScript Vinyl files.
  // These files can be used in Google Closure Compiler,
  // but they require the files in
  // https://github.com/google/protobuf/tree/master/js
  
  // ...
});
```
