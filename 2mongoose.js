var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/20160821");
var personSchema = new mongoose.Schema({
    username: String,
    age: Number,
    home: String
});
var personModel = mongoose.model('Person', personSchema);
//personModel.find({},function (err, docs) {
//    if (err) {
//        console.err(err)
//    } else {
//        console.log(docs)
//    }
//});
//$inc表示在原来基础上递增 只能用于数值类型的字段
//personModel.update({username:'赵六'},{$inc:{age:100}}, function (err, docs) {
//    if (err) {
//        console.err(err)
//    } else {
//        console.log(docs)
//    }
//});
//personModel.remove({username:'赵六'}, function (err,result) {
//    if (err) {
//        console.err(err)
//    } else {
//        console.log(result)
//    }
//});
//personModel.create({username:'赵六',age:33}, function (err, doc) {
//    if (err) {
//        console.err(err)
//    } else {
//        console.log(doc)
//    }
//});
var perple = [];
for (var i = 1; i <= 10; i++) {
    perple.push({age: i, username: 'zfpx' + i});
}
//create不但可以传对象还可以传数组
//personModel.create(perple, function (err,result) {
//    if (err) {
//        console.err(err)
//    } else {
//        console.log(result)
//    }
//});
//personModel.find({},{username:1,_id:0}, function (err,docs) {
//    console.log(docs)
//});
//personModel.findOne({},{username:1,_id:0}, function (err,docs) {
//    console.log(docs)
//});
/**
 * 第一个参数是文档的id，字符串就可以了
 */
//personModel.findById('57b91aac8e2e1de013766110', function (err, docs) {
//    console.log(docs)
//});
/**
 * 大于5小于等于9不含6
 */
//personModel.find({age:{$gt:5,$lte:9,$ne:6}}, function (err, docs) {
//    console.log(docs)
//});
//personModel.find({$or:[{age:6},{username:'zfpx5'}]}, function (err, docs) {
//    console.log(docs)
//});
//personModel.update({age:6},{$set:{home:'太原'}}, function (err, docs) {
//    console.log(docs)
//});
//personModel.find({home: {$exists: true}},function(error,docs){
//    console.log(docs)
//});
//每页2条 取第三页数据
//var pageSize = 2;
//var pageNum = 3;
//
//personModel.find()
//    .sort({age: -1})//按年龄降序排列
//    .skip((pageNum - 1) * pageSize)//指定跳过的记录数
//    .limit(pageSize)//限定返回的条数
//    //在未调用exec方法前查询并不会真正发往数据库服务器
//    .exec(function (err, docs) {
//    console.log(docs)
//});