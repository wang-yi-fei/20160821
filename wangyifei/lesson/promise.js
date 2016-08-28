var fs = require('fs');
function readFile(filename) {
    /**
     * promise 最初的状态是初始态
     * 调用resolve 表示成功了 就是把状态改为成功态
     * 调用reject表示失败了 就是把状态改为失败态
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