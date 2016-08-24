//ES6引入了一种新的原始数据类型Symbol，表示独一无二的值 它是JavaScript语言的第七种数据类型
//Symbol值通过Symbol函数生成
let s = Symbol('wyf');
console.log(s);

//var luckNum=Symbol;
//var person={};
//person[luckNum]=9;
//console.log(person[luckNum]);

//const Operator={
//    add:Symbol(),
//    minus:Symbol()
//};
//
//function calc(op,a,b){
//    switch (op){
//        case Operator.add:
//            return a+b;
//        case Operator.minus:
//            return a-b
//    }
//}
//console.log(calc(Operator.add,1,2));
//console.log(calc(Operator.minus,1,2));

