require('dotenv').config();
const express = require('express');
const connect = require("./db/connect");
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('build'))

const port = process.env.PORT || 3004;

connect().then(()=>{
    app.listen(port,()=>{
        console.log(`server is runnning at http://localhost:${port}`)
    })
})
