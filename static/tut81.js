// Inserting data in mongodb
use harryKart
db.items.insertOne({name:"Oppo 30s", price:22000, rating:4.5, qty:233, sold:89})
db.items.insertMany([{name:"Oppo 50s", price:21000, rating:4.1, qty:133, sold:39},{name:"Oppo 60s", price:23000, rating:4.7, qty:633, sold:79},{name:"Oppo 70s", price:123000, rating:4.6, qty:673, sold:73, isBig:true}])