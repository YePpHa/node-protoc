# Protocol Buffers for Node

Installs [`protoc`](https://github.com/protocolbuffers/protobuf) so other npm packages can use it. 

Forked from [YePpHa/node-protoc](https://github.com/YePpHa/node-protoc).

## Version

The `protoc` version is at `v3.17.3`.

## Usage

```
npx protoc --help
```

### Publish a New Version of the Package

Prerequisites: Set `NPM_AUTH_TOKEN` as an environment variable, where the value is a GitHub PAT 
with `read:packages` and`write:packages` privileges.

1. Increment the package version number
2. Submit the PR
3. After the PR is merged, the "Publish" workflow will automatically run to publish a new version
