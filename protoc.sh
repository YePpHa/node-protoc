#!/usr/bin/env node

const { protoc } = require('./')

protoc(process.argv.slice(2), {}, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
