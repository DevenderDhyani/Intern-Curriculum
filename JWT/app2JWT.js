const jwt = require('jsonwebtoken')
console.log("===========")
 const token = jwt.sign({userId:'devender123'},"secKeyDev2341",{expiresIn:'1h'});
jwt.sign({userId:'devender123'},"secKeyDev2341",{expiresIn:'1h'},(err,token)=>{
    console.log("token")
})
console.log("===========")