function sum(){
    //return Array.prototype.slice.call(arguments).reduce((curr,next)=>curr.next)
    return Array.from(arguments).reduce((curr,next)=>curr+next);
}
//console.log(sum(1,2,3));
//������������Ƕ���1�� ������һ����
//���ֻ��һ������ ��һ����ָ���� ��2����ָ��ʼֵ
//console.log(Array(3));
//console.log(Array.of(3,4,4,23));


//console.log([1,2,5,3,6].copyWithin(1,3,5));

var persons=[
    {id:'1', name:'hah'},
    {id:'2', name:'haha'},
    {id:'3', name:'hahaa'}
];

//��֪��name= haha
var a=persons.find((item,index,arr)=>item.id =='3');
console.log(a);
var b=persons.findIndex((item,index,arr)=>item.id =='3');
console.log(b);

let arr = [1, 2, 3, 4, 5, 6];

arr.fill('a', 1, 2);
console.log(arr);
