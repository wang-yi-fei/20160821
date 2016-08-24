class Person{
    constructor(name){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
    set cookie(cookie){
        this.cookie.push(cookie);
    }
    get cookie(){
        return this.cookie.join('; ')
    }
    //定义属于
}

//let zhangsan =new Person('张三');
//zhangsan.cookie='name=xxx';
//zhangsan.cookie='age=5';
//console.log(zhangsan.cookie);
//zhangsan.getName();
class Teacher extends Person{
    constructor(name,age){
        super(name);//一定要先调用父类的构造函数
        this.age = age;
    }
}
var teacher=new Teacher('WYF',22);
console.log(teacher);