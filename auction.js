var knex=require('./models/model')
module.exports=(app)=>{
    app.post('/',(req,res)=>{
        knex('Auction')
        .insert({
            'auction_name':req.body.auction_name,
            'price':req.body.price
        })
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    })

    app.get('/bidder',(req,res)=>{
        knex('Auction')
        .select('*')
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
//     const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?', name => {
//     console.log(name);
//     // readline.close(); 
//   });

}
