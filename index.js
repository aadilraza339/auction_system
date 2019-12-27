const express =require('express');
const app = express();
app.use(express.json());




app.use('/',auction=express.Router());
require('./auction')(auction)


app.listen(8000,()=>{
    console.log('running....');
    
})