/**
 * 1. ��ȡ1.txt �õ�1.txt�ļ������ǵڶ����ļ����ļ���
 * 2.
 * */
var fs=require('fs');
//ͬ���Ĵ���ܺ��Ķ� �������ܷǳ���
var file1=fs.readFileSync('./1.txt','utf8');
var file2=fs.readFileSync(file1,'utf8');
var file3=fs.readFileSync(file2,'utf8');
console.log(file3);
//���ļ���ʱ�򾡿���ʵ���첽

fs.readFile('./1.txt','utf8', function (err, file1) {
    fs.readFile(file1,'utf8', function (err, file2) {
        fs.readFile(file2,'utf8', function (err, file3) {
            console.log(file3)
        })
    })
});
var file1=fs.readFile('./1.txt','utf8');
var file2=fs.readFile(file1,'utf8');
var file3=fs.readFile(file2,'utf8');
console.log(file3);