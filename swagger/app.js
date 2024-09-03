// import express from "express"
// import swaggerUi from "swagger-ui-express"
// import swaggerJSDoc from "swagger-jsdoc";


// const app = express()

// const options = {

//     definition: {

//         openapi: '3.0.0',
//         info: {
//             title: 'node js api project for swagger',
//             version: '1.0.0'
//         },

//         servers: [
//             {
//                 url: 'http://localhost:3000/'
//             }
//         ]

//     },
//     apis: ['./app.js']
// }
// const swaggerSpec = swaggerJSDoc(options)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))



// /**
//  * @openapi
//  * /:
//  *   get:
//  *     description: Returns a list of people
//  *     responses:
//  *       200:
//  *         description: A list of people
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   name:
//  *                     type: string
//  *                   age:
//  *                     type: string           
//  */
 
// app.get("/", (req, res) => {
//     res.json({
//         name: "Rohan Garg",
//         location: "Mansa"
//     })
// })
// /**
//  * @openapi
//  * /posting:
//  *   post:
//  *     summary: Post a message
//  *     description: Endpoint to post a message and receive a confirmation response
//  *     requestBody:
//  *       description: Request body for posting a message
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               message:
//  *                 type: string
//  *                 example: "Hello, World!"
//  *     responses:
//  *       200:
//  *         description: Successful response
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 isWorking:
//  *                   type: string
//  *                   example: "Its Working"
//  */
// app.post("/posting",(req,res)=>{
//     res.json({
//         isWorking : "Its Working"
//         })
// })
// app.listen(3000, () => {
//     console.log("Server is running on localhost:3000")
// })


















//autogen

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const userRoutes  = require("./routes/router.js")
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/",userRoutes)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  console.log('Swagger docs available on http://localhost:3000/api-docs');
});
