var knex = require('knex')({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        password:"'",
        database:"auction"
    }
  })


// knex.schema.createTable('Auction', (table) => {
//     table.increments('auction_id').primary();
//     table.string('auction_name');
//     table.float('price');
//     // table.string('bidder_id').unique();
//     }).then(()=>{
//     console.log('crated table');
// }).catch((err)=>{  
//     console.log(err);
    
// }) 


// knex.schema.createTable('bidder',(table) => {
//   table.integer('auction_id')
//   table.increments('bidder_id')
//   table.float('bid_value')
// })
//   .then(() => {
//       console.log("table created")
//   })
//   .catch((err) => { console.log(err); throw err })


 
module.exports=knex;