/**
 * 生成器是一个函数 调用它会返回一个迭代器
 * 迭代器也是一个对象 他有一个next方法
 * 调用next会返回一个对象
 * @param books
 */
function* read(){
    var one=yield 'node';
    console.log(one);
    var two=yield 'js';
    console.log(two);
    yield 'java';
    console.log(3);
}
//function read(books){
//    let index=0;
//    return{
//        next(){
//            return {
//                value:books[index++],
//                done:index>books.length
//            }
//        }
//    }
//}
//it 就是迭代器
//每调用一次next 函数体会往下执行一次 执行到下一个yield或函数结束为止
//每一次的yield后面的值就是返回值中的value
//var it=read(['node','js','java']);
var iterator=read();
var  res1=iterator.next();
console.log(res1);
var  res1=iterator.next(2);
console.log(res1);
var  res1=iterator.next(3);
console.log(res1);
var  res1=iterator.next();
console.log(res1);
//do{
//    var current=it.next();
//    console.log(current)
//}while(!current.done);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
