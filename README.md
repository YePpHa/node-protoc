# Protocol Buffers for Node
A wrapper in Node for the compiled protoc from https://github.com/protocolbuffers/protobuf.

> [!IMPORTANT]
>
> Starting with version v21.0.x, the npm package [protoc](https://www.npmjs.com/package/protoc)
> is maintained in the repository https://github.com/timostamm/protobuf-npm.
>
> You can install the latest version with:
>
> ```
> npm install --save-dev protoc@latest
> npx protoc --version
> ```
>
> Note that the JavaScript generator has been removed from `protoc`, and lives in a
> separate repository now: https://github.com/protocolbuffers/protobuf-javascript
> Consequently, the package `protoc` no longer provides an API to generate JavaScript
> code.

The information below applies to the package `protoc` version 1.1.3 and earlier:

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
