var express = require('express');
var auth = require('../middleware/auth');
//创建一个路由容器
var router = express.Router();

router.get('/list',auth.mustLogin,function(req,res){
    //读取所有的列表并显示在页面中
    Model('Article').find({}).populate('user').exec(function(err,docs){
        //docs是所有的文章数组
        res.render('article/list',{title:'文章列表',articles:docs});
    });
});


router.get('/add',auth.mustLogin,function(req,res){
    res.render('article/add');
});


router.post('/add',auth.mustLogin, function (req, res) {
    var article=req.body;
    //从会话对象session中取出userId 赋给文章的发表人字段
    article.user=req.session.user._id;
    Model('Article').create(article, function (err, doc) {
        if(err){
            req.flash('error','文章发表失败了');
            res.redirect('back');

        }else{
            req.flash('success','文章发表成功');
            res.redirect('/');
        }
    })
});
module.exports = router;