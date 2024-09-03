const express = require('express')
const router = express.Router()
router.route("/working").get((req, res) => {
    res.json({
        name: "DevenderDhyani",
        age: 23
    })

router.route("/hello").post((req, res) => {
    res.json({
        name: "I am Post",
        age: 200
    })
})
})
module.exports = router