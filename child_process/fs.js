// const fs = require('fs');
// const path = require('path');

// const directoryPath = '.';

// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     console.error(`Error reading directory: ${err}`);
//     return;
//   }

//   console.log('Files and directories in the current directory:');
//   files.forEach((file) => {
//     const filePath = path.join(directoryPath, file);
//     fs.lstat(filePath, (err, stats) => {
//       if (err) {
//         console.error(`Error stating file: ${err}`);
//         return;
//       }

//       if (stats.isFile()) {
//         console.log(`File: ${file}`);
//       } else if (stats.isDirectory()) {
//         console.log(`Directory: ${file}`);
//       }
//     });
//   });
// });



//------------->>>direct way<<<-------------------
const fs = require('fs');
const path = require('path');

// Specify the current directory
const directoryPath = '.';

// Read the contents of the current directory
const items = fs.readdirSync(directoryPath);

// Filter and log files and directories
items.forEach((item) => {
  const itemPath = path.join(directoryPath, item);
  const stats = fs.lstatSync(itemPath);

  if (stats.isFile()) {
    console.log(`f: ${item}`);
  } else if (stats.isDirectory()) {
    console.log(`d: ${item}`);
  }
});
