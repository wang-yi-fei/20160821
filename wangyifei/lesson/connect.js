var  express=require('express');
var  app=express();
var session=require('express-session');
var flash=require('connect-flash');
app.use(session({
    secret:'wyf',
    resave:true

}));
//app.use(flash());
app.use(function (req, res, next) {
    //给请求增加了一个参数
    req.flash= function (type, msg) {
        //如果有msg 则表示赋值 也就是向session中保存数据
        if(msg){
            var messgages=req.session[type];
            if(messgages){
                messgages.push(msg);
            }else{//如果没有保存过 则向直接构建数组赋值
                req.session[type]=[msg];
            }
        }else{//表示取值
            var messages= req.session[type];
            delete req.session[type];
            return messages;
        }
    };
    next();
});
/**
 * flash是存储在session中的一段内容
 * 可以多次写
 * 只能读一次
 */
app.get('/write', function (req, res) {
    req.flash('success','ok')    ;
    res.send('xie')
});
app.get('/read', function (req, res) {
   var msg=req.flash('success');
    res.send(msg);
});
app.listen(9090);

