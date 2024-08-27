const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt("what is your age");
rl.prompt();
rl.on('line',(age)=>{
    console.log(age)
    rl.close();
})