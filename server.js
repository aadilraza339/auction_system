const express =require('express');
const app = express();
var auction = require('./Routes/auction')
app.use('/auction',auction);


app.listen(8000,()=>{
    console.log('running....');
    
})