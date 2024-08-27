const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const skey = "secretKey"
app.get("/", (req, res) => {
    res.json({
        message: "returned from get request of express application using no"
    })
})

app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: 'dev',
        email: 'dev.dhyani2024@gmail.com'
    }
    jwt.sign({ user }, skey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        })
    })
})

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, skey, (err, authData) => {
        if (err) {
            res.send({
                result: "not working...."
            })
        } else {
            res.json({
                message: "finally data recieved.",
                authData
            })
        }
    })
})
function verifyToken(req, res, next) {
    const x1 = req.headers['authorization'];
    console.log(x1)
    if (typeof x1 !== 'undefined') {
        const x2 = x1.split(" ");
        const token = x2[1];
        req.token = token;
        next();
    } else {
        res.send({
            response: 'invalid response!!!!'
        })
    }
}

app.listen(3000, () => {
    console.log("Server running")
})