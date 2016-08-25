var express = require('express');
var app = express();
app.get('/jsonp', function (req, res) {
    var wd = req.query.wd;//得到关键字
    var cb = req.query.cb;//得到回调函数的名字
    var result = {q: wd, p: false, s: []};//拼结果对象
    for (var i = 0; i < 10; i++) {
        result.s.push(wd + i);

    }
    res.send(`${cb}(${JSON.stringify(result.s)})`)
});


app.listen(9090);