const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stdin, stderr } = require("process");
const executeJava = (filePath) => {
  return new Promise((resolve, reject) => {
    exec(`java  ${filePath}`, (error, stdout, stderr) => {
      error && reject({ error, stderr });
      stderr && reject(stderr);
      resolve(stdout);
    });
  });
};
module.exports = {
  executeJava,
};
