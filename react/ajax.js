var Suggestion = React.createClass({
    //设置初始状态
    getInitialState:function(){
        return {}
    },
    handleChange: function () {//当文本框发生改变的时候执行的函数
        //获取 文本框的内容 并且调用百度的接口 获取结果 并显示在列表组上
        var value = this.refs.input.value;
        //
        $.ajax({
            url: 'http://www.baidu.com/su',
            type: 'get',
            jsonp: 'cb',
            dataType: 'jsonp',//指定数据类型是jsonp
            data: {wd: value},//要传递的参数对象
            processDate: true,//为true表示会把参数对象序列化成查询字符中追加到url后面
            context:this,//指定回调函数中的this指针
            success: function (result) {
                console.log(result);
                var data = result.s;
                data = data.map(function(item,index){
                    return <li key={index}>{item}</li>
                });
                this.setState({content:data});
            }
        })
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="input"
                       onChange={this.handleChange}/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<Suggestion></Suggestion>, document.querySelector('#app'));