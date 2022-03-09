show dbs
use rahulKart
show collections

db.items.updateOne({name:"Oppo 30s"},{$set:{price:2}})
db.items.find()

db.items.updateMany({name:"Oppo 30s"},{$set:{price:3,rating:1}})