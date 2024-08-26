const https = require("https")
const fs = require("fs")
const option = {

  //cmd to generate pvt key :: openssl genpkey -algorithm RSA -out private-key.pem -aes256
  key: fs.readFileSync('keys/private-key.pem'),

  //  openssl req -new -x509 -key private-key.pem -out certificate.pem -days 365
  cert: fs.readFileSync('keys/certificate.pem'),
  
  passphrase:"DevenderDhyani"
}
const server =  https.createServer(option,(req,res)=>{
    res.end("Heeyyyy")
    console.log("Printed")
})
server.listen(3000,()=>{
    console.log("Server is running on 3000 with a private key configured using https")
})




