import http from 'http'
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST'
  };
const req = http.request(options,(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk;
    });
    res.on('end',()=>{
        console.log(JSON.parse(data))
    });
    
})
req.on('error',(err)=>[
    console.log("Your Error is  --------:--------\n",err)
])
req.end();