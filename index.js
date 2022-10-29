const path = require("path");
const cp = require("child_process");
const fs = require("fs");
const protoc = require("./protoc.js");
const Vinyl = require("vinyl");
const uuid = require("uuid");
const mkdirp = require("mkdirp");
const glob = require("glob");

exports.protoc = function(args, options, callback) {
  cp.execFile(protoc, args, options, callback);
};

exports.closure = function(files, options, callback) {
  if (!callback) {
    callback = options;
    options = null;
  }

  options.imports = options.imports || [];
  options.outputPath = options.outputPath || "./";

  const cwd = process.cwd();
  const absoluteOutputPath = path.resolve(cwd, options.outputPath);
  const relative = path.relative(absoluteOutputPath, cwd);

  const args = [
    "--js_out=one_output_file_per_input_file,binary:."
  ];

  for (var i = 0; i < options.imports.length; i++) {
    args.push("-I", path.join(relative, options.imports[i]));
  }

  for (var i = 0; i < files.length; i++) {
    args.push(path.join(relative, files[i]));
  }

  mkdirp(options.outputPath, function(err) {
    if (err) {
      callback(err);
      return;
    }

    exports.protoc(args, {
      "cwd": options.outputPath
    }, callback);
  });
};

/**
 * Converts .proto files to .js files that can be used in Google Closure
 * Compiler.
 * The generated .js files require the files in
 * https://github.com/protocolbuffers/protobuf/tree/v3.20.3/js.
 * @param {?Array<string>} files the proto files.
 * @param {?function(?Error, ?Array<Vinyl>)} callback the callback method.
 */
exports.library = function(files, callback) {
  var dirpath = "tmp";
  var filename = uuid.v4();
  var jsFile = path.join(dirpath, filename);
  mkdirp("tmp", function(err) {
    if (err) {
      callback(err);
      return;
    }

    exports.protoc(["--js_out=library=" + jsFile + ",binary:."].concat(files), function(err, stdout, stderr) {
      if (err) {
        callback(err);
        return;
      }

      if (fs.existsSync(jsFile + ".js")) {
        fs.readFile(jsFile + ".js", function(err, contents) {
          if (err) {
            callback(err);
            return;
          }

          fs.unlink(jsFile + ".js", function(err) {
            if (err) {
              callback(err);
              return;
            }

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
          if (err) {
            callback(err, null);
            return;
          }

          var files = matches.map(function(match) {
            return new Vinyl({
              "cwd": "/",
              "base": "/",
              "path": match,
              "contents": fs.readFileSync(path.join(jsFile, match))
            });
          });

          rimraf(jsFile, function(err) {
            if (err) {
              callback(err);
              return;
            }

            fs.rmdir(dirpath, function() {
              callback(null, files);
            });
          });
        });
      }
    });
  });
};
