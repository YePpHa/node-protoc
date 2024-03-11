
const fs = require("fs");
const { exec } = require('child_process');
const path = require('path');
const cp = require("child_process");
// In einer Datei, z.B. currentDir.js

function mycallback(null1,in1,err){
    console.log(err)
  }
class ProtobuffGenerator {
    /**
     * Constructor for the ProtobufGenerator class.
     * Initializes necessary variables and configurations.
     */
    constructor() {
        // Initialization of necessary variables and configurations
        // This could include setting up paths, loading configurations, etc.
    }
 
    /**
     * Generates a Protobuf file for a specified programming language.
     * @param {string} language - The programming language for which the Protobuf file should be generated.
     * @param {string} proto_path - The path to the Proto file that should be used as the source.
     * @param {string} outputPath - The path where the generated Protobuf file should be saved.
     * @returns {Promise} A promise that resolves with the output of the command execution or rejects with an error.
     * @throws {Error} If the specified language is not supported.
     */
    generateProtobuf(language, proto_path,proto_file, outputPath) {
        let command;
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
                // Example for Python
                command = `npx protoc --python_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'csharp':
                // Example for C#
                command = `npx protoc --objc_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'ruby':
                // Example for Ruby
                command = `npx protoc --ruby_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'objc':
                // Example for Objective-C
                command = `npx protoc --objc_out=${outputPath} --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'php':
                // Example for PHP
                command = `npx protoc --php_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'dart':
                // Example for Dart
                command = `npx protoc --dart_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'rust':
                // Example for Rust
                command = `npx protoc --rust_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'swift':
                // Example for Swift
                command = `npx protoc --swift_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'kotlin':
                // Example for Kotlin
                command = `npx protoc --kotlin_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'scala':
                // Example for Scala
                command = `npx protoc --scala_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                break;
            case 'js':
                // Example for JavaScript/TypeScript
                const protocGenTsPath = `${process.cwd()}/frontend/node_modules/ts-protoc-gen/bin/protoc-gen-ts`; // todo
                const outDir = `${process.cwd()}/frontend/src`;
                const protoPath = `${process.cwd()}/protos/`;
                command = `
            npx protoc --plugin="protoc-gen-ts=${protocGenTsPath}" --ts_out="service=grpc-node,mode=grpc-js:${outDir}" --js_out="import_style=commonjs,binary:${outDir}" --proto_path="${protoPath}" ${proto_path}
            npx protoc --plugin="protoc-gen-ts=${protocGenTsPath}" --ts_out="service=grpc-web:${outDir}" --js_out="import_style=commonjs,binary:${outDir}" --proto_path="${protoPath}" ${proto_path}
            `;
                break;
            default:
                throw new Error(`Unsupported language: ${language}`);
        }
       console.log(command)
        // fs.mkdirSync(outputPath, { recursive: true });
       exec(command, function(err, stdout, stderr) {
        console.log(stdout);
        if (err) {
            mycallback(err);
            console.error(err);
            return;
        }
        console.log(stderr);
        mycallback(null, stdout, stderr);
    })
      

     
    }
 }


module.exports ={ProtobuffGenerator}