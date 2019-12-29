var knex = require('../conection.js');


let insertData = (auctionDetail)=>{
   return knex('Auction').insert(auctionDetail)
}

let bidder = ()=>{
    return  knex('Auction').max('auction_id as auction_id')

}

let maxDatas = ()=>{
    return knex('bidder').max('bid_value as max_value').max('bidder_id as bidder_id').max('auction_id as auction_id')
}

let auctionName = (auction_id)=>{
    return knex('Auction').select('auction_name').where('auction_id',auction_id)
}

let nameInsert = (auction_id, bidder_id, max, auction_name )=>{
    return  knex('soldOut')
            .insert({
            "auction_id":auction_id,
            "bidder_id":bidder_id,
            "max_value":max,
            "name":auction_name
    })
}

let getData  = (id)=>{
   return knex('soldOut').select('*').where('auction_id',id)
}

// let bid_value = (bid_value)=>{
//     return  knex('bidder')
//     .insert({
//     "auction_id":data[0]['auction_id'],
//     "bid_value":bid_value
//     })
// }

module.exports={insertData,bidder,maxDatas, auctionName, nameInsert, getData}