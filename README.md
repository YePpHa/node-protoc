# protoc-helper
multilanguage  grpc protobuff generator for node. forked from [node-protoc](https://github.com/YePpHa/node-protoc) to add additional languages.
uses the protoc binary and supports multiple platforms and processors.
npm: `npm i protoc-helper`

you can find  a demo in the scripts folder:

```
//test
const { ProtobuffGenerator } = require('../index');

console.log(__dirname)
const dir = String(__dirname)+"/"
const generator = new ProtobuffGenerator()
generator.generateProtobuf("go",dir,"helloworld.proto",dir)
```
# NPX and additional args

you can use `npx protoc` or add your own arguments in the index.js:
```
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
