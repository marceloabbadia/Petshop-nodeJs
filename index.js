import express from "express"
import cors from "cors"
import winston from "winston"
import AnimaisRouter from "./routes/animais.routes.js"
import ProprietariosRouter from "./routes/proprietarios.routes.js"

const { printf, timestamp, combine, label } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`
})

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-log" })
    ],
    format: combine(
        label({ label: "petshop-log" }),
        timestamp(),
        myFormat
    )
})


const app = express()
app.use(express.json())
app.use(cors())

app.use("/animais", AnimaisRouter)
app.use("/proprietarios", ProprietariosRouter)
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(3000, () => {
    console.log("API Started")
})