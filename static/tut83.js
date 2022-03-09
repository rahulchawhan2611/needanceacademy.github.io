show dbs
use rahulKart
show collections
db.items.find({price:22000})

// Deleting items from mongodb database
db.items.deleteOne({price:20000})
// deleteOne will delete the matching document entry and will delete  the first entry in case of multi document match
db.items.deleteMany({price:2000})