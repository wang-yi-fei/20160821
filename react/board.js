var Board = React.createClass({
    getInitialState(){
      return {messages:[this.props.messages]};
    },
   handleClick(event){
       event.preventDefault();
       var value=this.refs.txtMsg.value;
       this.state.messages.push(value);
       localStorage.setItem('messages',JSON.stringify(this.state.messages));
       this.setState({messages:this.state.messages}, function () {
           this.refs.txtMsg.value='';
       })
   },
    render: function () {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <form >
                        <div className="form-group row">
                            <div className="col-xs-10">
                                <input type="text" className="form-control" ref="txtMsg"/>
                            </div>
                            <div className="col-xs-2">
                                <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.messages.map((item,index)=>{
                                return <li key={index} className="list-group-item">{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});

//localStorage 是一个window全局变量
//setItem(key,value) getItem(key)

var messages=localStorage.getItem('messages');
messages=messages?JSON.parse(messages):[];

ReactDOM.render(
    <Board messages={messages}/>,
    document.querySelector('#app')
);