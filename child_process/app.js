//we need to run some cmd which can be run using system terminal or related to operating system only. 
//In that case only child processes are usefull.

//child process is different from fs module. because we use build function to interact with file system instead of directly entering cmd to the terminal. if in case any functionality which is not being provided by the terminal

//best practice
// const {spawn} = require("child_process")
// const ls = spawn('ls',['-lh' , '/Users/devender/Downloads/javascript/child_process']);

// ls.stdout.on('data',(data) => {
//     console.log(data.toString('utf-8'))
// })
// ls.stderr.on('data',(data)=>{
//     console.error(data.toString('utf-8'))   
// })
// ls.on('close',(code)=>{
//     console.log("Child process exited with code 0")
// })



//suitable to small cmds
const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Shell error: ${stderr}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});



//------------->>> Pros of Using child_process for This Task <<<-------------------

// Quick and Easy Execution: Running a shell command like ls (for Unix-based systems) or dir (for Windows) is straightforward and quickly provides the output directly from the system's shell, including any colored or formatted output that the shell command produces by default.

// Leverages Shell Capabilities: Shell commands can offer powerful and flexible ways to list and filter files using options (like ls -l for detailed output or ls -a to include hidden files) that would require more code to replicate using fs.



//------------->>> Cons of Using child_process for This Task <<<-------------------

// Platform Dependence: The specific shell commands (ls on Unix-like systems and dir on Windows) make the code platform-dependent. This means you would need to add platform checks in your code or use different commands depending on the operating system, which adds complexity.

// Security Risks: Using child_process.exec can expose your application to security risks such as shell injection, especially if any part of the command string includes user input or dynamically constructed paths.

// Performance Overhead: Creating a child process involves more overhead than using a native Node.js API. The fs module accesses the file system directly through Node.js's built-in capabilities, while child_process spawns a separate shell process, which can be less efficient.

// Error Handling: Errors from shell commands might need more parsing and handling in JavaScript, whereas fs provides more structured and predictable error objects directly.