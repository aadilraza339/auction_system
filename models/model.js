var knex = require('knex')({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        password:"'",
        database:"auction"
    }
  })


// knex.schema.createTable('bidder', (table) => {
//     table.increments('bidder_id').primary();
//     table.integer('auction_id');
//     table.float('price');
//     // table.string('bidder_id').unique();
//     }).then(()=>{
//     console.log('crated table');
// }).catch((err)=>{  
//     console.log(err);
    
// })
     

module.exports=knex;