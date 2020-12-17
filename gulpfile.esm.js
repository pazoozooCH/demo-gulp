import { transpile, transpileWatch } from './tasks/transpile';

const gulp = require('gulp');
const { spawn } = require('child_process');

let node;

async function startServer() {
  if (node) node.kill();
  node = await spawn("node", ["-r", "esm", "./src/server.js"], { stdio: "inherit" });

  node.on("close", function (code) {
    if(code === 8) {
      console.log("Error detected, waiting for changes...");
    }
  });
}

function watch() {
  // Start the server, if a change is detected restart it
  gulp.watch(
    ["src/**/*", "src/server.js"],
    {
      queue: false,
      ignoreInitial: false // Execute task on startup 
    },
    startServer);
}

module.exports = {
  transpile,
  'transpile:watch': transpileWatch,
  run: startServer,
  'run:watch': gulp.series(transpileWatch, watch),
  default: startServer
}