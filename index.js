const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app  = express()
// const productRouter = require('./routes/product');

//settings
app.set('json spaces', 4)

//middleeares
app.use(morgan('dev'));
app.use(bodyParser.json());
//para formularios
app.unsubscribe(bodyParser.urlencoded({extended: false }))


// routers
// app.use('/products',productRouter);



//estar serve
app.listen(3000, () => {
    console.log("server port ", 3000);
    
})

