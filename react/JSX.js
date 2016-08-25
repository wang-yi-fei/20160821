/**
 * 1 渲染的组件有且只能有一个顶级标签（顶级元素）
 * @type {string[]}
 */
var persons = ['刘德华', '范冰冰', '郭跃'];
var style = {color:'red'};
ReactDOM.render(
    //有且只能一个顶级元素
    <div>
        {//遇到{}以js语法来进行解析
            persons.map(function (person) {
                return <div style={style}>Hello, {person}!</div>
            })
        }
    </div>,
    document.getElementById('app')
);