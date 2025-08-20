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
> code, but you can easily achieve the same functionality with a small function.
> 
> <details><summary>Example script to call protoc from JS</summary>
>
> ```ts
> import { spawnSync } from "node:child_process";
> import { mkdtempSync, readdirSync, statSync } from "node:fs";
> import { join } from "node:path";
> import { tmpdir } from "node:os";
>
> function compile(files: string[]): string[] {
>   const out = mkdtempSync(join(tmpdir(), "protoc-output"));
>   // Just as an example, use --php_out to generate PHP code
>   const ret = spawnSync(
>     "protoc", ["--php_out=" + out, ...files],
>     { encoding: "utf8"},
>   );
>   if (ret.status !== 0) {
>     throw new Error(ret.stderr);
>   }
>   return readdirSync(out, { recursive: true, encoding: "utf8" }).filter((f) =>
>     statSync(join(out, f)).isFile(),
>   );
> }
>
> // Run with `npx node example.ts`
> console.log(compile(["proto/msg.proto"])); // [ 'Msg.php', 'GPBMetadata/Proto/Msg.php' ]
> ```

</details>



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
