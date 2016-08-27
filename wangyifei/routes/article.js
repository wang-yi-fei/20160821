var express = require('express');
var auth = require('../middleware/auth');
var markdown = require('markdown').markdown;
//创建一个路由容器
var router = express.Router();
//文章列表路由
router.get('/list', auth.mustLogin, function (req, res) {
    var user = req.query.user;//取得查询字符串中的用户ID
    //读取所有的列表并显示在页面中
    var query = {};//查询条件对象
    if (user)
        query['user'] = user;
    Model('Article').find(query).populate('user').exec(function (err, docs) {
        if (err) {
            req.flash('error', '显示文章列表失败' + err);
            res.redirect('back');
        } else {
            //把markdown源文件转换成html格式的内容
            docs.forEach(function (doc) {
                doc.content = markdown.toHTML(doc.content);
            });
            //docs是所有的文章数组
            res.render('article/list', {title: '文章列表', articles: docs});
        }

    });
});

//显示增加文章的表单路由
router.get('/add', auth.mustLogin, function (req, res) {
    res.render('article/add');
});

router.post('/add', auth.mustLogin, function (req, res) {
    //从请求体中得到文档对象
    var article = req.body;
    //从会话对象session中取出userId,赋给文章的发表人字段
    article.user = req.session.user._id;
    //把此文件存放到数据库里
    Model('Article').create(article, function (err, doc) {
        if (err) {
            req.flash('error', '文章发表失败了');
            res.redirect('back');
        } else {
            req.flash('success', '文章发表成功');
            res.redirect('/');
        }
    });
});
router.get('/detail/:articleId', function (req, res) {
    var articleId = req.params.articleId;
    Model('Article').findById(articleId).then(function (doc) {
        res.render('article/detail', {title: '文章详情页', article: doc});
    })/*, function (err, doc) {
        if (err) {
            req.flash('error', '查询文章详情失败');
            req.redirect('back')
        } else {
            res.render('article/detail', {title: '文章详情页', article: doc});
        }
    })*/
});
module.exports = router;