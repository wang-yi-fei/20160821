let print = function (a, b, c) {
    console.log(a, b, c)
};
//展开操作符
//print(...[1, 2, 3]);
function max(a, b, c) {

    console.log(Math.max(...arguments))
}
//max(4, 7, 1);
//剩余操作符
function sum(prefix, ...values) {
    return prefix + values.reduce(function (curr, next) {
            return curr + next;
        }, 0)
}
//console.log(sum('$', 1, 5, 3, 632, 7, 3));
//1 是一个函数 数组中的每一元素都要一次传递给此函数
//2 是一个初始值
//数组中有多少个元素 function就是执行多少次
//第一个curr=初始值 item等于第一个元素
//此函数会返回一个结果 这个结果会成为此函数下次执行时候的curr
//var arr=[1,3,5,...[...[1,3,4]]];
//console.log(arr);
//arr.reduce(function (curr,item) {
//    console.log(curr,item);
//    return curr+item
//},0);

//c就成了函数的名字
//var calc = function c(num) {
//    if (num == 1) {
//        return 1
//    }
//    return num * c(--num);

//};
//var fs=require('fs');
////匿名函数的递归用到了函数名
//fs.readFile('./num.txt','utf-8', function c(err, data) {
//    var num=parseInt(data);
//    if (num == 1) {
//        return 1
//    }
//    var result= num * c(err,--num);
//    console.log(result);
//    return result;
//});
//阶乘
//console.log(calc(5));

//箭头函数

var input = [1, 2, 4];
output = input.map(item=>item * 2);
console.log(output);
//参数多一个 需要用小括号包裹
//如果函数体不只是有返回值 还有别的语句 需要用大括号包裹
input.sort((a, b)=> {
    console.log('s');
    return b - a
});
console.log(input);

var person = {
    name: 'wyf',
    print: function () {
        setTimeout(() =>
                console.log(this.name)
            , 1000)
    }
};
person.print();

