var Person = React.createClass({
    /**
     * 1.状态只能由内部产生 内部变化
     * 2.状态只能由内部发生改变
     * 3.当状态变换之后会重新渲染页面
     */
    getInitialState() {
        return {happy: true};
    },

    getDefaultProps(){
        return {name:'无名氏'};
    },
    handleClick() {
        //设置新的方法
        this.setState({happy: !this.state.happy});
    },
    render() {
        var heart = this.state.happy ? '开心' : '不开心';
        return (
            <p>
                {this.props.name} {heart} <br/>
                <button onClick={this.handleClick}>小爷要换心情</button>
            </p>
        );
    }
});

ReactDOM.render(
    <Person name="王一飞" />,
    document.getElementById('app')
);