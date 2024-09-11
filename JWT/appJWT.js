//to create apis get post put
const express = require('express')
//to parse cookies
const cookieParser = require('cookie-parser')
const path = require("path")
//JWT for authentication
const jwt = require('jsonwebtoken')
const app = express()
const skey = "secretKey"

//it is running because we need to parse cookie recieved for authentication
//if we don't don't use this we can not eligible to recive the cookies data
app.use(cookieParser())

//for any post request if we want to get the values from the request object then we need to do extend url encoding
app.use(express.urlencoded({ extended: true }))
//it will see th directory where index.html is present and it will run on localhost:port/ by default
app.use(express.static('public'))

//created a post request which will triger when user filled form and press enter
app.post("/login", (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(user)
    const token = jwt.sign({ user }, skey, { expiresIn: '300s' })
    console.log("cookie set..")
    // setting cookie 
    res.cookie("Authorization", token)
    console.log("redirecting....")
    //to will send html page to the browser.
    // res.sendFile(path.resolve('./public/profile.html'))
    res.redirect("/profile")
})

app.get("/profile", verifyToken, (req, res) => {
    console.log("User is varifying......")
    //it will varify the token with skey signature and it will return the payload
    jwt.verify(req.token, skey, (err, authData) => {
        if (err) {
            res.send({
                result: "Error occurred while verifying token...."
            });
        } else {
            console.log(authData);  // Ensure this logs the expected user data
            res.json({
                message: "finally data received.",
                authData
            });
        }

    });

})
//middlewhere run as soon as /profile hits by the enduser or any redirect is performed.
function verifyToken(req, res, next) {
    console.log("varify token called...")

    //if we use this token the value will not recieve..
    // const token = req.headers["Authorization"]
    // const token = req.header("Authorization")

    //this will work in any of case but make sure cookieParser() is in use.
    const token = req.cookies.Authorization
    console.log("token : ", token)
    req.token = token; // Assign the verified token to request object
    next();  // Proceed to the next middleware or route handler
}

app.listen(3000, () => {
    console.log("Server running")
})