const { ProtobuffGenerator } = require('../index');

console.log(__dirname)
const dir = String(__dirname)+"/"
const generator = new ProtobuffGenerator()
generator.generateProtobuf("go",dir,"helloworld.proto",dir)
