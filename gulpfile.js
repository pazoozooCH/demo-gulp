const { series } = require('gulp');
const { spawn } = require('child_process');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  console.log('#Cleaning runs');
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  console.log('#Build runs');
  cb();
}

function run() {
    return spawn('node', ['src/server.js'], {stdio: 'inherit'});
}

exports.build = build;
exports.default = series(clean, build, run);