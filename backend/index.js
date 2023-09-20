const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express()
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

readdirSync('./routes').map((route) => app.use('/api/v1' ,require('./routes/' + route)))

const server =()=>{
    db()
    app.listen(PORT ,()=>{
        console.log("Port :", PORT);
    })
}

server()