const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express()
const { db } = require('./db/db')
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

const server =()=>{
    db()
    app.listen(PORT ,()=>{
        console.log("Port :", PORT);
    })
}

server()