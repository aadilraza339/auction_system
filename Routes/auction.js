var knex=require('../Model/knex')
var sleep = require('system-sleep');

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
  
        app.get('/sold_out',(req,res)=>{
            knex('bidder').max('bid_value as max_value').max('bidder_id as bidder_id').max('auction_id as auction_id')
            .then((max_value)=>{
                for(i in max_value){
                    var max=(max_value[0]['max_value']);
                    var bidder_id=max_value[0]['bidder_id']
                    var auction_id=max_value[0]['auction_id']

                }
                
                knex('Auction').select('auction_name').where('auction_id',auction_id)
                .then((name)=>{
                   var auction_name=name[0]['auction_name']
                   knex('soldOut')
                   .insert({
                       "auction_id":auction_id,
                       "bidder_id":bidder_id,
                       "max_value":max,
                       "name":auction_name
                   })
                    .then((data)=>{
                        res.send(data)
                    })
                    .catch((err)=>{
                        res.send(err)
                    })
                
                })
            })
            .catch((err)=>{
                res.send(err)
            })
        })

        app.get('/won/:auction_id',(req,res)=>{
            knex('soldOut').select('*').where('auction_id',req.params.auction_id)
            .then((data)=>{
                sleep(500)
                res.send(data)
            })
            .catch((err)=>{
                res.send(err)
            })
        })


}
