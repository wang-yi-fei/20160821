var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/20160821");
var personSchema = new mongoose.Schema({
    name:{
        type:String,
        match:/^zfpx/,
        required:true
    },
    age:{
        type:Number,
        min:18,
        max:150
    },
    gender:{
        type:String,
        enum:['男','女']
    },
    home:{
        type:String,
        validate: [validator,'必须是北京']
    }
});
//methods是方法的集合 可以往里面添加自定义属性
personSchema.methods.findSameAge= function (cb) {
    this.model('Person').find({age:this.age},cb);
};
//为模型添加新的自定义方法
personSchema.statics.findByUsername= function (name, cd) {
    this.find({username:new  RegExp(name)},cd)
};
var personModel = mongoose.model('Person', personSchema);
function validator (val) {
    return val == '北京';
}

//personModel.findByUsername('zfpx4', function (err, docs) {
//    console.log(docs)
//});
//var zhangsan=new personModel({
//    username:'张三',
//    age:5
//});
//zhangsan.findSameAge(function (err, docs) {
//    console.log(docs)
//});
