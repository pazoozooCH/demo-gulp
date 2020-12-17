const { spawn } = require('child_process');

let node;

export async function startServer() {
  if (node) node.kill();
  node = await spawn("node", ["-r", "esm", "./dist/server.js"], { stdio: "inherit" });

  node.on("close", function (code) {
    if(code === 8) {
      console.log("Error detected, waiting for changes...");
    }
  });
}