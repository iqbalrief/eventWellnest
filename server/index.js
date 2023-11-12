const express = require('express')

const app = express()
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
const router = require('./routes/index')
const cors = require('cors')

// const corsOptions = {
//     origin: 'http://localhost:3000', // Ganti dengan alamat frontend Anda
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//   };
  

const PORT = process.env.PORT
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/v1", router);




app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))


module.exports = app;