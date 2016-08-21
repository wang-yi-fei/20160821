var mongoose = require('mongoose');
mongoose.Promise=Promise;
mongoose.connect("mongodb://localhost:27017/20160821");
//定义一个模型骨架 定义一个集合中字段的名称和类型
//如果字段名称不符 会忽略此字段 如果类型不符 会报错
var personSchema = new mongoose.Schema({
    username: String,
    email: String,
    gender: String,
    married: String,
    birthday: Date
});
var personModel = mongoose.model('Person', personSchema);
//3.定义一个实体
var wangwuEntity = new personModel({
    usename: '王五',
    email: 'wangwu@qq.com',
    gender: '男',
    birthday: new Date(),
    married: '待离婚'
});
wangwuEntity.save(function (err, result) {
    if (err) {
        console.err(err)
    } else {
        console.log(result)
    }
});
