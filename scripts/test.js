//newtest
const { ProtobuffGenerator, createProtobuff } = require('../index');
const path = require('path');
console.log(__dirname)
const dir = String(__dirname)

console.log("_______ WITHOUT CLASS _________")
createProtobuff("js",dir,path.join(dir,"helloworld.proto"))

console.log("_______ CLASS _________")
const generator = new ProtobuffGenerator()
generator.generateProtobuff("js",dir,"helloworld.proto",dir)

console.log("_______ CLASS + ARRAY ARGUMENTS_________")
generator.generateProtobuff([["go",dir,"helloworld.proto",dir],["python",dir,"helloworld.proto",dir]])

