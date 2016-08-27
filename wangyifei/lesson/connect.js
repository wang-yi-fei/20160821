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
    //������������һ������
    req.flash= function (type, msg) {
        //�����msg ���ʾ��ֵ Ҳ������session�б�������
        if(msg){
            var messgages=req.session[type];
            if(messgages){
                messgages.push(msg);
            }else{//���û�б���� ����ֱ�ӹ������鸳ֵ
                req.session[type]=[msg];
            }
        }else{//��ʾȡֵ
            var messages= req.session[type];
            delete req.session[type];
            return messages;
        }
    };
    next();
});
/**
 * flash�Ǵ洢��session�е�һ������
 * ���Զ��д
 * ֻ�ܶ�һ��
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

