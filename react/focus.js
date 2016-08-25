var Focus = React.createClass({
    handleClick() {
        //通过给子组件添加ref属性
        //就可以在方法里通过this.refs 属性值得到DOM元素的引用
        this.refs.msg.focus();
    },
    render() {
        return (
            <div>
                <input type="text" ref="msg" />
                <input type="button" value="获得焦点"
                       onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <Focus />,
    document.querySelector('#app')
);