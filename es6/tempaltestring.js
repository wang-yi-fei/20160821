var {name,age}={name:'wyf',age:22};
//let ֻ������һ�� ��Ȼ�ᱨ�� Identifier 'desc' has already been declared
//let  desc=name+' is ' +age+ ' years old';
//let desc=`${name} is ${age} years old`;
//console.log(desc);

function desc(string,name,age){
    console.log(string,name,age)
}
desc`${name} is ${age} years old !`;
