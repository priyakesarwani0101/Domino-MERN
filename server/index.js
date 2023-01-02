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
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productsRoutes');
const cartRouter = require('./routes/cartRoutes')
const port = process.env.PORT || 3004;

app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', cartRouter)
app.use('/api/*', (req, res) => {
    return res.status(404).send('Not found')
});

connect().then(() => {
    app.listen(port, () => {
        console.log(`server is runnning at http://localhost:${port}`)
    })
})
