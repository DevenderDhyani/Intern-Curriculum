import logger from "./logger.js";
import morgan from "morgan";
import express from 'express';
const app = express()
const customFormat = ':method :url :status :response-time ms';
//morgan
app.use(morgan("combined", { stream: { write: (message) => logger.info(message.trim()) } }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post('/working', (req, res) => {
    logger.info("Printed")
    res.send("sended")
})

app.listen(3000, () => {
    logger.info(`Server is running on http://localhost:3000`);
})