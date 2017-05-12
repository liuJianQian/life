var express = require('express');
var router = express.Router();
var db = require('../dao/loginDao')
/* GET home page. */
router.get('/', function(req, res, next) {
    var userName = req.query.userName
    var password = req.query.password
    console.log(password)
    res.setHeader('Access-Control-Allow-Origin',"*");
    db.find(userName, function (err, data) {
        if(err){
            res.send('你这网络有问题')
        }else {
            if(data){
                if(data.userName == userName){
                    if(data.password == password){
                        res.send('登陆成功')
                    }else{
                        res.send('密码错误')
                    }
                }else{
                    res.send('请去注册')
                }
            }
        }
    })
});

module.exports = router;