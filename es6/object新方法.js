let name = 'zfpx';
let age = 8;
console.log(module.exports === this);
let getName = function () {
    console.log(this.name);
};
let person = {
    name,
    age,
    getName
};
//person.getName();

console.log(Object.is(NaN, NaN));

var nameobj = {name: 'wyf'};
var ageobj = {age: 22};
var obj = {};
//Object.prototype.assign = function (target, ...sources) {
//    sources.forEach(source=> {
//        for (let attr in source)
//            target[attr] = source[attr]
//    });
//};
//Object.assign(obj, nameobj, ageobj);
//console.log(obj);


var  obj1={name:'wyf1'};
var  obj2={name:'wyf2'};
var  obj={};
//Object.setPrototypeOf(obj,obj1);
//console.log(obj.name);
//console.log(Object.getPrototypeOf(obj));

//var obj3={
//    //ֱ���ڶ���������������ԭ��__proto__
//    __proto__:obj1
//};
//console.log(Object.getPrototypeOf(obj3));

let p={
    eat(){
        return 'milk'
    }
};
//ͨ��super���Ե���prototype�ϵ����Ի򷽷�
let stu={
    __proto__:p,
    eat(){
        return super.eat()+'+bread';
    }
};
//console.log(stu.eat());

