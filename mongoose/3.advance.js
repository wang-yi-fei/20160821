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
        enum:['��','Ů']
    },
    home:{
        type:String,
        validate: [validator,'�����Ǳ���']
    }
});
//methods�Ƿ����ļ��� ��������������Զ�������
personSchema.methods.findSameAge= function (cb) {
    this.model('Person').find({age:this.age},cb);
};
//Ϊģ������µ��Զ��巽��
personSchema.statics.findByUsername= function (name, cd) {
    this.find({username:new  RegExp(name)},cd)
};
var personModel = mongoose.model('Person', personSchema);
function validator (val) {
    return val == '����';
}

//personModel.findByUsername('zfpx4', function (err, docs) {
//    console.log(docs)
//});
//var zhangsan=new personModel({
//    username:'����',
//    age:5
//});
//zhangsan.findSameAge(function (err, docs) {
//    console.log(docs)
//});
