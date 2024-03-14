//other languages
const fs = require("fs");
const { exec } = require('child_process');
const path = require('path');
const cp = require("child_process");
const { type } = require("os");



function createProtobuff(language,outputPath,proto_file,proto_path){
    let directoryPath,fileName
    if(proto_path==undefined) {
    directoryPath = path.dirname(proto_file);
    fileName = path.basename(proto_file);
    console.log(`Directory: ${directoryPath}`);
    console.log(`File Name: ${fileName}`);
    }
    else{
        directoryPath=proto_path
        fileName=proto_file
    }
    new ProtobuffGenerator().generateProtobuf(language,directoryPath,fileName,outputPath)
}
    
function mycallback(){
    //console.log("created ")
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
  
     
        generateProtobuf(language, proto_path,proto_file, outputPath, additionalCommands) {
            let command;
            let arr
            switch (language) {
                case 'go':
                    // Example for Go --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative
                    command = `npx protoc --go_out=${outputPath} ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'java':
                    // Example for Java
                    command = `npx protoc --java_out=${outputPath}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'python':
                    // Example for Python
                    command = `npx protoc --python_out=${outputPath}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'csharp':
                    // Example for C#
                    command = `npx protoc --objc_out=${outputPath}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'ruby':
                    // Example for Ruby
                    command = `npx protoc --ruby_out=${outputPath}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'objc':
                    // Example for Objective-C
                    command = `npx protoc --objc_out=${outputPath}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'php':
                    // Example for PHP
                    command = `npx protoc --php_out=${outputPath}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'dart':
                    // Example for Dart
                    command = `npx protoc --dart_out=${outputPath}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'rust':
                    // Example for Rust
                    command = `npx protoc --rust_out=${outputPath}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'swift':
                    // Example for Swift
                    command = `npx protoc --swift_out=${outputPath}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'kotlin':
                    // Example for Kotlin
                    command = `npx protoc --kotlin_out=${outputPath}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'scala':
                    // Example for Scala
                    command = `npx protoc --scala_out=${outputPath}  ${additionalCommands?additionalCommands:""}  --proto_path=${proto_path} ${proto_file}`;
                    break;
                case 'js':
                command = `npx protoc --js_out=${outputPath}  --proto_path=${proto_path} ${proto_file}`;
                    break;
               case 'ts':
                        // Example for JavaScript/TypeScript
                    command= `npx protoc --ts_out=${outputPath} --proto_path=${proto_path} ${proto_file}`
                    break;
                    default:
                        
                        if(Array.isArray(language)){
                            arr = true;
                            for (let arg of language){
                                this.generateProtobuf(...arg);
                            }
                        } else if(typeof(language) == 'object'){
                            arr = true;
                            for (let arg in language){
                                this.generateProtobuf(...arg);

                            }
                        } else {
                            throw new Error(`Unsupported language: ${language}`);
                        }
            }
       if(arr!=true){
       } 
if(arr!=true)
        {       exec(command, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("__________\n"+"finished command: " + JSON.stringify([language, proto_path,proto_file, outputPath, additionalCommands]))
//        mycallback(null, stdout, stderr);
    }
    )
    }
    }
 }
module.exports ={createProtobuff,ProtobuffGenerator,cli}
