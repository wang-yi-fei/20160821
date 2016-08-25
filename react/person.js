var Person = React.createClass({
    //类似于约定了一个接口文档,用于这是验证传递给组件的属性，
    propTypes: {
        //定义msg的属性类型为字符串，必须传入
        name: React.PropTypes.string.isRequired,
        gender: React.PropTypes.string.isRequired,
        age:React.PropTypes.number.isRequired
    },
    getDefaultProps(){
        //如果父组件没有传递name属性的话，使用默认属性
        return {name:'无名氏 '}
    },
    render() {
        //属性可以通过属性对象this.props中取出
        return <h1> {this.props.name}
            {this.props.gender}
            {this.props.age}
        </h1>;

}});

var props = {
    gender:' 男 ',
    age:18
};
//把一个Person的实例渲染到appDOM元素的内部
//组件属性一般初始化后就不改变了
//组件属性一般是由父组件传进来的，不是由自己定义的，
ReactDOM.render(
    <Person name='王一飞 ' {...props} />,//属性可以在使用组件时传入
    document.querySelector('#app')
);