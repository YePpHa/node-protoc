[![npm version](https://badge.fury.io/js/@ji-podhead%2Fprotoc-helper.svg)](https://badge.fury.io/js/@ji-podhead%2Fprotoc-helper)
# protoc-helper
multilanguage  grpc protobuff generator for node. forked from [node-protoc](https://github.com/YePpHa/node-protoc) to add additional languages.
uses the protoc binary and supports multiple platforms and processors.

## Install
`npm i @ji-podhead/protoc-helper`

## How to use
- import via npm install
```JavaScript
   const {ProtobuffGenerator} = require("@ji-podhead/protoc-helper")
 ```

- import via git clone
```JavaScript
   const { ProtobuffGenerator } = require('../index');
 ```
- generate the protobuffs
```JavaScript
const dir = String(__dirname)+"/"
const generator = new ProtobuffGenerator()
generator.generateProtobuf("go",dir,"helloworld.proto",dir)
```
- here were are using the helloworld protofile from the current directory.
- you can find  a demoscript and the proto file in the scripts folder.
## NPX and additional args

you can use `npx protoc` or add your own arguments in the index.js:
```JavaScript
   switch (language) {
            case 'go':
                // Example for Go --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative
                command = `npx protoc --go_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'java':
                // Example for Java
                command = `npx protoc --java_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'python':
```
