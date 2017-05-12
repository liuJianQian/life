
//引入
var mongoose = require('mongoose');
//使用
mongoose.connect("mongodb://192.168.21.221:27017/userInfo");

var connection = mongoose.connection;
//on    当...的时候
connection.on('error', function(err){
    console.error(err);
});

connection.on('open', function() {
    // we're connected!
    console.log('we are connected!');
});

//建立 schema
var userSchema = new mongoose.Schema({
    userName: {type: String},
    password: {type: String},
});


//建立 model
var userModel = mongoose.model('userInfo', userSchema);

function find(userName, callback) {
    userModel.findOne({userName: userName}, function (err, doc) {
        if(err){
            callback(err, null)
        }else {
            callback(null, doc)
        }
    })
}

module.exports.find = find
// var user1 = {
//     userName: 'liujianqian',
//     password: 'xiaojian123'
// }
// userModel.create(user1)
find('liujianqian', function (err, data) {
    console.log(typeof data)
})

