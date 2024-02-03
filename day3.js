const { exec } = require("child_process");
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    console.log(`Command Output:${stdout}`);
    if (stderr) {
      console.error("Error Messages:");
      console.error(stderr);
    }
  });
}

executeCommand('dir');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!