const express = require('express');
const app = express();

app.use(express.json());

const port = 3002;
app.listen(port,()=>{
    console.log(`server is runnning at http://localhost:${port}`)
})