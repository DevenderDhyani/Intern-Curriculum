// const st = require("fs")

// const x = st.createReadStream("./01_file.txt")
// x.on('data',(chunk)=>{
//     console.log(`${chunk}`)
// })

// const y = st.createWriteStream("./01_file.txt")
// y.w("New data joined from streems file")
// y.end("\nThis is the end streem")




//duplex


//this program is basically used to copy data from one file to another file using streams and fs module methods.
const { Duplex } = require('stream');
const fs = require('fs');
const { date } = require('yup');


const duplexStream = new Duplex({
    read(size) {
        // Read the file asynchronously
        fs.readFile('01_file.txt', (err, data) => {
            if (err) {
                this.emit('error', err); // Emit error if file read fails
                return;
            }
            this.push(data); // Push file data to the readable side
            this.push(null); // End the readable side
        });
    },
    write(chunk, encoding, callback) {
        // console.log(`New File first Data has been entered by streem Duplex class of streem module ${chunk.toString()}`);
        callback();
    }
});

const Fs_writeStreem = fs.createWriteStream('02_output.txt')
duplexStream.pipe(Fs_writeStreem)
duplexStream.on('data', (chunk) => {
    console.log(`Read: ${chunk}`);
});

duplexStream.write('Hello, Duplex!\n');
duplexStream.end();
