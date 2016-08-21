var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/20160821");
var courseSchema = new mongoose.Schema({
    name: String
});
var courseModle = mongoose.model('Course', courseSchema);
var studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: {
        type: mongoose.Schema.Types.ObjectId,//类型是对象ID类型
        ref: 'Course'//引用课程的主键，他就是外键
    }
});
//保存之前执行中间件 next表示继续执行 调用下一个中间件
//studentSchema.pre('save', function (next) {同步
//    this.age = this.age * 2;
//    next();
//});
studentSchema.pre('save', function (next) {
    var self=this;
    setTimeout(function () {
        self.age=self.age*3;
        next();
    },5000);
});
var studentModel = mongoose.model('Student', studentSchema);
courseModle.create({
    name: 'node.js'
}, function (err, course) {
    studentModel.create({
        name: '张三',
        age: 10,
        course: course._id
    }, function (err, student) {
        //console.log(student)
        //studentModel.findById(student._id, function (err, doc) {
        //    courseModle.find(doc.course, function (err, doc) {
        //        console.log(doc)
        //    });
        //    console.log(doc)
        //})
        studentModel.findById(student._id).populate('course').exec(function (err, doc) {
            console.log(doc)
        });
    });
});