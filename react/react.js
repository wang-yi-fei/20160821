/**
 * ReactDom是引入react-dom.js 之后挂在全局对象下的属性有一个render方法 负责把一个元素插入到某个DOM元素的内部
 * 第一个参数虚拟DOM
 * 第二个参数是指被插入的
 */
ReactDOM.render(
<h1>hello world</h1>,
    document.getElementById('app')
);
