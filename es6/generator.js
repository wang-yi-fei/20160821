/**
 * ��������һ������ �������᷵��һ��������
 * ������Ҳ��һ������ ����һ��next����
 * ����next�᷵��һ������
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
//it ���ǵ�����
//ÿ����һ��next �����������ִ��һ�� ִ�е���һ��yield��������Ϊֹ
//ÿһ�ε�yield�����ֵ���Ƿ���ֵ�е�value
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
