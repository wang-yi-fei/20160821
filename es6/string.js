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
//�����Ƿ�����Ӵ�
console.log(str.startsWith('wyf'));
//�����Ƿ����Ӵ���ʼ
console.log(str.endsWith('old'));
//�����Ƿ����Ӵ���β

console.log('abc'.repeat(2))