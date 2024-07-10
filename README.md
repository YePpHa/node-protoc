# protoc

Forked from [YePpHa/node-protoc](https://github.com/YePpHa/node-protoc).

Installs [`protoc`](https://github.com/protocolbuffers/protobuf) so other npm packages can use it. Also includes a 
wrapper in Node for the compiled `protoc`.

## Version

It's currently using Protocol Buffers `v3.17.3`.

## Platforms

Google only provides binary files for Windows, Linux and OSX in x86_64 and x86_32.

## Examples

### Binary

```
npx protoc --help
```

### Node

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

### Publish a New Version of the Package

1. Increment the package version number
2. Submit the PR
3. After the PR is merged, the "Publish" workflow will automatically run to publish a new version
