var knex=require('./models/model')
const readline = require('readline-sync').question
var sleep = require('system-sleep');

// const raw_input = readline.createInterface({
//     input: process.stdin,
//     // output: process.stdout
//   })
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

    app.post('/bidder',(req,res)=>{
        knex('Auction')
        .select('*')
        .then((data)=>{
            console.log(data)
                sleep(30*100)
              
            if(data[0]['price']<req.body.bid_value){
                knex('bidder')
                .insert({
                "auction_id":data[0]['auction_id'],
                "bid_value":req.body.bid_value
            })          
                .then((send_data)=>{
                 res.send(send_data)
             })
                .catch((err)=>{
                 res.send(err)
             })
             }
             else{
                 res.send('bidder price is less ')
             }  
        })
        .catch((err)=>{
            res.send(err)
        })
    })
  
 


    // function function2() {
    //     // all the stuff you want to happen after that pause
    //     console.log('Blah blah blah blah extra-blah');
    // }
 
    // setTimeout(function2, 3000); 


}
