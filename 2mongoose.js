var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/20160821");
var personSchema = new mongoose.Schema({
    username: String,
    age: Number
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
var perple=[];
for(var i=1;i<=10;i++){
    perple.push({age: i,username:'zfpx'+i});
}
//create不但可以传对象还可以传数组
personModel.create(perple, function (err,result) {
    if (err) {
        console.err(err)
    } else {
        console.log(result)
    }
});