/**
 * 1. 组件名称首字母要大写
 */
var style={color:'green'};
var Message = React.createClass({
    //render犯法指定了到底如何渲染 渲染什么东西
    render(){
        return <h1 className="green" style={style}>hello</h1>
    }
});
ReactDOM.render(
    <Message/>,//此处可像使用普通的DOM元素一样使用Message组件
    document.querySelector('#app')
);
ReactDOM.render(
    <Message/>,//此处可像使用普通的DOM元素一样使用Message组件
    document.querySelector('#app1')
);