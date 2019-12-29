var express = require('express')
var knexAdd=require('../Model/knex')
var knex = require('../conection')
var sleep = require('system-sleep');
var auction = express.Router();
auction.use(express.json())


auction.post('/',( req, res ) => {
    let auctionDetail = {'auction_name':req.body.auction_name, 'price':req.body.price}
     knexAdd.insertData(auctionDetail).then((data)=>{
       return res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})

auction.post('/bidder',(req , res) => {
        knexAdd.bidder().then((data)=>{
        var id=(data[0]['auction_id'])
        knex('Auction')
        .select('price')
        .where('auction_id',id)
        .then((price)=>{
        
            
            if(price[0]['price']<req.body.bid_value){
                // console.log(data[0]['auction_id'])
                knex('bidder')
                .insert({
                "auction_id":id,
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
       
       
    })
    .catch((err)=>{
        res.send(err)
    })
})

auction.get('/sold_out',(req,res)=>{
        knexAdd.maxDatas()
        .then((max_value)=>{
        var max=(max_value[0]['max_value']);
        var bidder_id=max_value[0]['bidder_id']
        var auction_id=max_value[0]['auction_id']
        // var auction_name=name[0]['auction_name']
        // console.log(auction_id)
        knexAdd.auctionName(auction_id).then((name)=>{
            var auction_name=name[0]['auction_name']
            knexAdd.nameInsert(auction_id,bidder_id, max, auction_name ).then((data)=>{
                
                res.send("auction_sold")
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


auction.get('/won/:auction_id',(req,res)=>{
    var id = req.params.auction_id
    knexAdd.getData(id).then((data)=>{
        sleep(500)
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = auction;
