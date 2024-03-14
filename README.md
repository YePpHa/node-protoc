[![npm version](https://badge.fury.io/js/@ji-podhead%2Fprotoc-helper.svg)](https://badge.fury.io/js/@ji-podhead%2Fprotoc-helper)
# protoc-helper
multilanguage  grpc protobuff generator for node. forked from [node-protoc](https://github.com/YePpHa/node-protoc) to add additional languages.
uses the protoc binary and supports multiple platforms and processors. Please see [Protobuf Plugin Installation](https://github.com/ji-podhead/protoc-helper/edit/master/README.md#protobuf-plugin-installation) to install the required plugins for your target language.

## Install
- **local:**    `npm i @ji-podhead/protoc-helper`
- **cli-tool:** `npx install protoch`
## How to use
**CLI (via npx global install)**
```JavaScript
npx protoch <language> <outputPath> <proto_file> <proto_path>
```
---
- **Import**
```JavaScript
   const {ProtobuffGenerator,createProtobuff} = require("@ji-podhead/protoc-helper")
 ```

- **create a path**
```JavaScript
const dir = String(__dirname)+"/"
```
- **generate the protobuffs `without instance` (array is supported)**
   
```JavaScript
createProtobuff("js",dir,path.join(dir,"helloworld.proto"))
```

- **generate the protobuffs `using class instance`**

```JavaScript
const generator = new ProtobuffGenerator()
generator.generateProtobuf("js",dir,"helloworld.proto",dir)
```
- **generate the protobuffs `usings array` for multiple files**

```JavaScript
const generator = new ProtobuffGenerator()
generator.generateProtobuf([["go",dir,"helloworld.proto",dir],["python",dir,"helloworld.proto",dir]])
```
 **@param language** — The programming language for which the Protobuf file should be generated.
<br> **@param proto_path** — The path to the Proto file that should be used as the source.
<br> **@param outputPath** — The path where the generated Protobuf file should be saved
<br> **@returns** — A promise that resolves with the output of the command execution or rejects with an error.


---
- here were are using the helloworld protofile from the current directory.
- you can find  a demoscript and the proto file in the scripts folder.
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
