var Input = React.createClass({
    getInitialState() {//获取初始状态
        return {value: ''};
    },
    handleChange(event) { //处理改变事件

        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <input style={{color:'lightblue'}} type="text"
                       value={value} onChange={this.handleChange}/>

                <p>{value}</p>
            </div>
        );
    }
});

ReactDOM.render(<Input/>, document.querySelector('#app'));