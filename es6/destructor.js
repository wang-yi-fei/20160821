var arr=['wyf','帅'];
//var [name,age]=arr;
//console.log(name,age);

//var [,age]=arr;
//console.log(age);


//对象的解析赋值
//var obj={name:'wyf',age:22};
////先声明一个变量myname 然后把obj.myname赋给myname变量
////先声明一个变量myage 然后把obj.myage赋给myage变量
//var {name:myname,age:myage}=obj;
//console.log(myname,myage);

//可以给默认值
//let [a,b,c='默认c']=[1,2];
//console.log(a,b,c);

//jquery $.ajax
function ajax({method='get',url=new Error('url must be have')}){
    //var method=options.method?options.method:'GET';
    //var url=options.url?options.url:throw Error('must be');
    console.log(method,url);
}
ajax({});