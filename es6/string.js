var str='wyf is 22 years old';
//String.prototype.includes= function (sub) {
//    return this.indexOf(sub)!=-1;
//};
//String.prototype.startsWith= function (sub) {
//    return this.indexOf(sub)==0;
//};
//String.prototype.endsWith= function (sub) {
//    return this.indexOf(sub)==this.length-sub.length;
//};
console.log(str.includes('years'));
//父串是否包含子串
console.log(str.startsWith('wyf'));
//父串是否以子串开始
console.log(str.endsWith('old'));
//父串是否以子串结尾

console.log('abc'.repeat(2))