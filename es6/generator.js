/**
 * ��������һ������ �������᷵��һ��������
 * ������Ҳ��һ������ ����һ��next����
 * ����next�᷵��һ������
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
//it ���ǵ�����
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
