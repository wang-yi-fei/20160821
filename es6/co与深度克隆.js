Object.prototype.assign = function (target, ...source) {
    source.forEach(function (obj) {
        for (var attr in obj) {
            var value = ((Object.prototype.toString.call(obj[attr]) == '[object Object]') || (Object.prototype.toString.call(obj[attr]) == '[object Array]'))?JSON.parse(JSON.stringify(obj[attr])):obj[attr];
            target[attr] = value;
        }
    });
    return target;
};
var result = {};
Object.assign(result, {name: 'feige'}, {age: 18}, {
    like: {
        drink: 'drink',
        eat: 'eat',
        info: [1, 2, 3, 4, 5]
    }
});
console.log(result);

var obj = {drink: 'drink', eat: 'eat', info: [1, 2, 3, 4, 5]};
console.log(JSON.parse(JSON.stringify(obj)) == obj);
var fs = require('fs');


function readInfoFromFile(path, options){
    return function (next) {
        fs.readFile(path, options, function (err, data) {
            if (err){
                throw Error('读取文件内容失败');
            } else {
                next(data);
            }
        })
    }
}

function* read(){
    var file1 = yield readInfoFromFile('./1.txt','utf8');
    console.log('file1:'+file1);
    var file2 = yield readInfoFromFile(file1, 'utf8');
    console.log('file2:'+file2);
    var file3 = yield readInfoFromFile(file2, 'utf8');
    console.log('file3:'+file3);
}

function col(){
    var it = read();
    function nextStep(val){
        var current = it.next(val);
        if (!current.done){
            current.value(nextStep);
        }
    }
    nextStep();
}
col();