var fs = require('fs');
function readFile(filename) {
    /**
     * promise �����״̬�ǳ�ʼ̬
     * ����resolve ��ʾ�ɹ��� ���ǰ�״̬��Ϊ�ɹ�̬
     * ����reject��ʾʧ���� ���ǰ�״̬��Ϊʧ��̬
     */
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    })
}
readFile('1.txt').then(function (data) {
    return readFile(data)
}).then(function (data) {
    return readFile(data)
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
});