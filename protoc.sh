#!/usr/bin/env node

const { protoc } = require('./')

protoc(process.argv.slice(2), {}, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  if (stdout) {
    console.info(stdout)
  }

  if (stderr) {
    console.error(stderr)
  }
})
