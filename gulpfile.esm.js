import { copyJs } from './tasks/copy-js';
import { transpile, transpileWatch } from './tasks/transpile';

const gulp = require('gulp');
const del = require('del');
const { spawn } = require('child_process');

let node;

async function startServer() {
  if (node) node.kill();
  node = await spawn("node", ["-r", "esm", "./dist/server.js"], { stdio: "inherit" });

  node.on("close", function (code) {
    if(code === 8) {
      console.log("Error detected, waiting for changes...");
    }
  });
}

function watch() {
  // Start the server, if a change is detected restart it
  gulp.watch(
    ["src/**"],
    {
      queue: false,
      ignoreInitial: false // Execute task on startup 
    },
    // TODO build / restart / whatever...
    saySomething);
    // startServer);
}

function saySomething(cb) {
  console.log('##something');
  cb();
}

const build = gulp.parallel(copyJs, transpile);

module.exports = {
  clean: () => del('dist'),
  build,
  transpile,
  run: startServer,
  'run:watch': gulp.series(build, startServer, watch),
  default: startServer
}