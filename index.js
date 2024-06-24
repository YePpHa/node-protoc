//other languages
const fs = require("fs");
const { exec } = require('child_process');
const path = require('path');
const cp = require("child_process");
const { type } = require("os");


/** 
 * @description Generate your protobuf files. Array is not supported.
 * Use the function in one of the following ways:
 * - Absolute path:`createProtobuff(<lang>,<output_path>,<absolute_proto_file_path>)`
 * - Name and Path:`createProtobuff(<lang>,<output_path>,<proto_file_folder>,<proto_file>)`
 * @param {string} lang - Target language
 * @param {string} output_path - The folder where your protobuf files are getting placed
 * @param {string} proto_file - The name of the proto file (used when specifying the folder and file name separately)
 * @param {string} proto_file_folder - The folder where your proto file is located (used when specifying the folder and file name separately)
 * @param {string} absolute_proto_file_path - The folder path and the proto file in one string (used when specifying the `.proto` file path directly)
 */
function createProtobuff(lang,output_path,proto_file_folder,proto_file){
    let directoryPath,fileName
    if(proto_file==undefined) {
    directoryPath = path.dirname(proto_file_folder);
    fileName = path.basename(proto_file_folder);
    console.log(`Directory: ${directoryPath}`);
    console.log(`File Name: ${fileName}`);
    }
    else{
        directoryPath=proto_file
        fileName=proto_file_folder
    }
    new ProtobuffGenerator().generateProtobuff(lang,output_path,fileName,directoryPath)
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
     * @description Generate your protobuf files. Array is not supported.
     * Use the function in one of the following ways:
     * - no Array:`generateProtobuff(<lang> <output_path> <proto_file> <proto_file_folder>)`
     * - with Array:`generateProtobuff([[<lang>,<output_path>,<proto_file_folder>,<proto_file>],...])`
     * @param {string|Array} lang - The programming language for which the Protobuf file should be generated.
     * @param {string} outputPath - The path where the generated Protobuf file should be saved.
     * @param {string} proto_file - The name  of the Proto file that should be used as the source.
     * @param {string} proto_file_folder - The folder where the Proto file is located that should be used as the source.
     * @throws {Error} If the specified language is not supported.
     */
        generateProtobuff(lang,output_path, proto_file,proto_file_folder,additionalCommands) {
            let command;
            let arr
            switch (lang) {
                case 'go':
                    // Example for Go --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative
                    command = `npx protoc --go_out=${output_path} ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'java':
                    // Example for Java
                    command = `npx protoc --java_out=${output_path}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'python':
                    // Example for Python
                    command = `npx protoc --python_out=${output_path}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'csharp':
                    // Example for C#
                    command = `npx protoc --objc_out=${output_path}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'ruby':
                    // Example for Ruby
                    command = `npx protoc --ruby_out=${output_path}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'objc':
                    // Example for Objective-C
                    command = `npx protoc --objc_out=${output_path}  ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'php':
                    // Example for PHP
                    command = `npx protoc --php_out=${output_path}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'dart':
                    // Example for Dart
                    command = `npx protoc --dart_out=${output_path}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'rust':
                    // Example for Rust
                    command = `npx protoc --rust_out=${output_path}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'swift':
                    // Example for Swift
                    command = `npx protoc --swift_out=${output_path}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'kotlin':
                    // Example for Kotlin
                    command = `npx protoc --kotlin_out=${output_path}   ${additionalCommands?additionalCommands:""} --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'scala':
                    // Example for Scala
                    command = `npx protoc --scala_out=${output_path}  ${additionalCommands?additionalCommands:""}  --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
                case 'js':
                command = `npx protoc --js_out=${output_path}  --proto_path=${proto_file_folder} ${proto_file}`;
                    break;
               case 'ts':
                        // Example for JavaScript/TypeScript
                    command= `npx protoc --ts_out=${output_path} --proto_path=${proto_file_folder} ${proto_file}`
                    break;
                    default:
                        
                        if(Array.isArray(lang)){
                            arr = true;
                            for (let arg of lang){
                                this.generateProtobuff(...arg);
                            }
                        } else if(typeof(lang) == 'object'){
                            arr = true;
                            for (let arg in lang){
                                this.generateProtobuff(...arg);

                            }
                        } else {
                            throw new Error(`Unsupported language: ${lang}`);
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
        console.log("__________\n"+"finished command: " + JSON.stringify([lang,output_path, proto_file,proto_file_folder, additionalCommands]))
//        mycallback(null, stdout, stderr);
    }
    )
    }
    }
 }
module.exports ={createProtobuff,ProtobuffGenerator}
