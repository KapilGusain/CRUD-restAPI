var mongoose= require('mongoose');

mongoose.connect('mongodb://kapilgusain20_db_user:Xz6I9HbxgNzTB5f1@ac-yubdjyk-shard-00-00.0pscnzn.mongodb.net:27017,ac-yubdjyk-shard-00-01.0pscnzn.mongodb.net:27017,ac-yubdjyk-shard-00-02.0pscnzn.mongodb.net:27017/?ssl=true&replicaSet=atlas-136fwg-shard-0&authSource=admin&appName=PracticeDB');

// Xz6I9HbxgNzTB5f1

const userSchema = mongoose.Schema({
  name: String,
  nickname: String, 
  score: Number,
  categories: {
    type: Array,
    default: []
  },
  dated: {
    type: Date,
    default: Date.now()
  } 
})

module.exports = mongoose.model('students', userSchema);
