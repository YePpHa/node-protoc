var path = require("path");
var cp = require("child_process");
var fs = require("fs");
var protoc = require("./protoc.js");
var Vinyl = require("vinyl");
var uuid = require("node-uuid");
var mkdirp = require("mkdirp");
var glob = require("glob");

/**
 * Converts .proto files to .js files that can be used in Google Closure
 * Compiler.
 * The generated .js files require the files in
 * https://github.com/google/protobuf/tree/master/js.
 * @param {?Array<string>} files the proto files.
 * @param {?function(?Error, ?Array<Vinyl>)} callback the callback method. 
 */
exports.library = function(files, callback) {
  var dirpath = "tmp";
  var filename = uuid.v4();
  var jsFile = path.join(dirpath, filename);
  mkdirp("tmp", function(err) {
    if (err) return callback(err);

    cp.execFile(protoc, ["--js_out=library=" + jsFile + ",binary:."].concat(files), function(err, stdout, stderr) {
      if (err) return callback(err);

      if (fs.existsSync(jsFile + ".js")) {
        fs.readFile(jsFile + ".js", function(err, contents) {
          if (err) return callback(err);

          fs.unlink(jsFile + ".js", function(err) {
            if (err) return callback(err);

            fs.rmdir(dirpath, function() {
              callback(null, [new Vinyl({
                "cwd": "/",
                "base": "/",
                "path": filename + ".js",
                "contents": contents
              })]);
            });
          });
        });
      } else {
        glob("**/*.js", {
          "cwd": jsFile
        }, function(err, matches) {
          if (err) return callback(err, null);

          var files = matches.map(function(match) {
            return new Vinyl({
              "cwd": "/",
              "base": "/",
              "path": match,
              "contents": fs.readFileSync(path.join(jsFile, match))
            });
          });

          rimraf(jsFile, function(err) {
            if (err) return callback(err);

            fs.rmdir(dirpath, function() {
              callback(null, files);
            });
          });
        });
      }
    });
  });
};
