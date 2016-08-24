for(let i=0;i<3;i++){
    //console.log(i)
}
//console.log(i);
const MY_nmae='wyf';
//MY_nmae='wyj';//Assignment to constant variable
//常量是指此变量引用的堆内存里的对象地址不能修改
//但是此对象的属性值是可以修改的
const names=['hah','hhx'];
names.push('xxx');
names.shift();
console.log(names);
//不同的会计作用域是可以重复的
{
    const names=['haha','ixix'];
    console.log(names)
}