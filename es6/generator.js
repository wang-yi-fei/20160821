/**
 * 生成器是一个函数 调用它会返回一个迭代器
 * 迭代器也是一个对象 他有一个next方法
 * 调用next会返回一个对象
 * @param books
 */
function read(books){
    let index=0;
    return{
        next(){
            return {
                value:books[index++],
                done:index==books.length
            }
        }
    }
}
//it 就是迭代器
var it=read(['node','js','java']);
do{
    var current=it.next();
    console.log(current)
}while(!current.done);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
//var firit=it.next();
//console.log(firit);
