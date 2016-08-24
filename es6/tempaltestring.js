var {name,age}={name: 'wyf', age: 22};
//let 只能声明一次 不然会报错 Identifier 'desc' has already been declared
//let  desc=name+' is ' +age+ ' years old';
//let desc=`${name} is ${age} years old`;
//console.log(desc);

function desc(strings,...values){
    var result = '';
    console.log(strings,...values);
    for(var i = 0;i<values.length;i++){
        result += (strings[i]+values[i]);
    }
    result+=strings[i];
    console.log(result);
}
//desc`${name} is ${age} years old !`;
var trmplStr = '${name} is ${age} years old !';
function trans(desc, templStr) {
    var strings = templStr.split(/\$\{\w+\}/);
    console.log(strings);
    var values = templStr.match(/\$\{(\w+)\}/g);
    console.log(values);
    values=values.map(function (value) {
        return eval(value.match(/\$\{(\w+)\}/)[1]);
    });
    console.log(strings, values);
    desc.apply(null,[strings,...values])
};
trans(desc,trmplStr);

//function desc(string,...values){
//    console.log(string,values);
//    var result='';
//    for(let i=0;i<values.length;i++){
//        result+=(string[i]+values[i]);
//    };
//
//}
