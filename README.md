[![npm version](https://badge.fury.io/js/protoc-helper.svg)](https://badge.fury.io/js/protoc-helper)
[![NPM Downloads](https://img.shields.io/npm/dw/protoc-helper.svg)](https://www.npmjs.com/package/protoc-helper)
[![npm version](https://img.shields.io/badge/protoc-binary-blue)](https://www.npmjs.com/package/protoc-helper)
# protoc-helper
A multilanguage  protoc protobuff generator for node. uses the protoc binary and supports multiple platforms and processors. forked from [node-protoc](https://github.com/YePpHa/node-protoc) to add additional languages.
. Please see [Protobuf Plugin Installation](https://github.com/ji-podhead/protoc-helper/tree/master?tab=readme-ov-file#protobuf-plugin-installation) to install the required plugins for your target language.

## Install
- **local:**    `npm i protoc-helper`
- **cli-tool:** `npx install protoch`
## How to use 
- you can find  a demoscript and the proto file in the scripts folder.
---
  
**CLI (via npx global install)**
```JavaScript
npx protoch <lang> <out_path> <proto_file> <proto_path>
npx protoc --go_out=<out_path> --proto_path=<proto_file_folder>  <proto_file> // exchange --go_out is using another lamguage
```
---
**via Script** <br>
`without instance` (array is supported)
```JavaScript
createProtobuff( <lang> <output_path> <total_proto_file_path> )
createProtobuff( <lang> <output_path> <proto_file_folder> <proto_file>)

```
`using class instance`
```JavaScript
generator.generateProtobuf( <lang> <output_path> <proto_file> <proto_file_folder>)
```
`usings array` for multiple files

```JavaScript
generator.generateProtobuf([[ <lang> <output_path> <proto_file> <proto_file_folder>],[ <lang> <output_path> <proto_file> <proto_file_folder> ]])
```
---
### Arguments
 **lang** The programming language for which the Protobuf file should be generated.
<br> **total_proto_file_path** The path to the Proto file that should be used as the source.
<br> **output_path** The path where the generated Protobuf file should be saved
<br> **proto_file** The name of the proto file including the extension.
<br> **proto_file_folder** A path to a folder that holds a proto file.

### Example
```JavaScript
const {ProtobuffGenerator,createProtobuff} = require("protoc-helper")
const generator = new ProtobuffGenerator()
const dir = String(__dirname)+"/"
generator.generateProtobuf([["go",dir,"helloworld.proto",dir],["python",dir,"helloworld.proto",dir]])
 ```
> why is my syntax so oldschool. guess i havent worked with js in a while. i need to use {args} for constructor and get rid of the super old import syntax. but it works, so i just leave that for now


---

if you like this package, pls consider giving Jeppe’s and my repo a Star on github

---
## Protobuf Plugin Installation

### Go
- **Repository**: [https://github.com/golang/protobuf](https://github.com/golang/protobuf)
- **Installation**:
bash go get -u github.com/golang/protobuf/protoc-gen-go


### Java
- **Repository**: [https://github.com/google/protobuf-gradle-plugin](https://github.com/google/protobuf-gradle-plugin)
- **Installation**:
gradle plugins { id 'com.google.protobuf' version '0.8.17' }


### Python
- **Repository**: [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf)
- **Installation**:
bash pip install protobuf


### C#
- **Repository**: [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf)
- **Installation**:
powershell Install-Package Google.Protobuf.Tools


### Ruby
- **Repository**: [https://github.com/localshred/protobuf](https://github.com/localshred/protobuf)
- **Installation**:
bash gem install protobuf


### Objective-C
- **Repository**: [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf)
- **Installation**:
ruby pod '!ProtoCompiler-gRPCPlugin'


### PHP
- **Repository**: [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf)
- **Installation**:
bash composer require google/protobuf


### Dart
- **Repository**: [https://github.com/dart-lang/protobuf](https://github.com/dart-lang/protobuf)
- **Installation**:
bash dart pub global activate protoc_plugin


### Rust
- **Repository**: (https://github.com/neoeinstein/protoc-gen-prost](https://github.com/neoeinstein/protoc-gen-prost)
- **Installation**:
*see repo


### Swift
- **Repository**: [https://github.com/apple/swift-protobuf](https://github.com/apple/swift-protobuf)
- **Installation**:
swift // Add SwiftProtobuf as a dependency to your Xcode project


### Kotlin
- **Repository**: [https://github.com/grpc/grpc-kotlin/tree/master/compiler](https://github.com/grpc/grpc-kotlin/tree/master/compiler)
- **Installation**:
bash

Clone and build the plugin
git clone https://github.com/grpc/grpc-kotlin.git cd grpc-kotlin/compiler ./gradlew installDist


### Scala
- **Repository**: [https://github.com/scalapb/ScalaPB](https://github.com/scalapb/ScalaPB)
- **Installation**:
scala // Add ScalaPB as a dependency to your sbt project libraryDependencies += "com.thesamet.scalapb" %% "compilerplugin" % "0.11.1"


### JavaScript/TypeScript
- **Repository**: [https://github.com/improbable-eng/ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen)
- **Installation**:
bash npm install ts-protoc-gen

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
