var MessageBox = React.createClass({
    getInitialState() {
        //定义初始状态 状态可以从属性中获取
        console.log('2.获取默认状态 getInitialState');
        return {
            count: 0
        }
    },
    //加载前 获取默认属性 它会返回一个对象
    getDefaultProps() {
        console.log('1.获取默认属性 getDefaultProps');
        //如果原来的从父组件传递过来的this.props对象上有次属性 则不赋值
        //如果没有此属性则用此促使之填充
        return {count:1}
    },
    componentWillMount() {

        console.log('3.此组件将要被渲染到界面上 componentWillMount');
    },
    componentDidMount () {
        console.log('5.此组件渲染到界面之后.componentDidMount');
    },
    componentWillUnmount() {
        console.log('销毁.componentWillUnmount');
    },
    shouldComponentUpdate(nextProp, nextState) {
        console.log('MessageBox.shouldComponentUpdate');
        if (nextState.count > 10) return false;
        return true;
    },
    componentWillUpdate (nextProp, nextState) {
        console.log('MessageBox.componentWillUpdate');
    },
    componentDidUpdate() {
        console.log('MessageBox.componentDidUpdate');
    },
    killMySelf () {
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
    },
    doUpdate() {
        this.setState({
            count: this.state.count + 1
        });
    },
    render() {
        return (
            <div>
                <h1 > 计数： {this.state.count}</h1>
                <button onClick={this.killMySelf}>移除</button>
                <button onClick={this.doUpdate}>手动更新一下组件</button>
                <Submessage count={this.state.count}/>
            </div>
        )
    }
});

var Submessage = React.createClass({
    componentWillReceiveProps: function (nextProp) {
        console.log('Submessage.componentWillReceiveProps');
    },
    shouldComponentUpdate: function (nextProp, nextState) {
        console.log('Submessage.shouldComponentUpdate');
        if (nextProp.count > 5) return false;
        return true;
    },
    render: function () {
        return (
            <h3>当前计数是：{this.props.count}</h3>
        )
    }
});

ReactDOM.render(<MessageBox/>, document.querySelector('#app'));