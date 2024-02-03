const fs = require('fs').promises;

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log("\nFile Content:\n"+data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...