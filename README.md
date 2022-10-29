# Protocol Buffers for Node
A wrapper in Node for the compiled protoc from https://github.com/protocolbuffers/protobuf.

## Version
It's currently using Protocol Buffers `v3.20.3`.

## Platforms
Google only provides binary files for Windows, Linux and OSX in x86_64 and x86_32.

## Examples
There's currently no documentation. Hopefully this example will help.

```JavaScript
var protoc = require("protoc");

protoc.library(["path/to/file.proto", "path/to/file2.proto"], function(err, files) {
  if (err) {
    console.error(err);
    return;
  }

  // Handle the JavaScript Vinyl files.
  // These files can be used in Google Closure Compiler,
  // but they require the files in
  // https://github.com/google/protobuf/tree/master/js
  
  // ...
});
```

It's also possible to directly call the protoc binary file:
```
npx protoc --help
```
