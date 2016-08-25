var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head}/>
                <PanelBody body={this.props.body}/>
                <PanelFooter footer={this.props.footer}/>
            </div>
        );
    }
});
var PanelHead = React.createClass({
    render() {
        return (
            <div className="panel-heading">
                {this.props.head}
            </div>
        );
    }
});
var PanelBody = React.createClass({
    render() {
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        );
    }
});
var PanelFooter = React.createClass({
    render() {
        return (
            <div className="panel-footer">
                {this.props.footer}
            </div>
        );
    }
});
var props={
    head:"头部",
    body:"正文",
    footer:"尾"
};
ReactDOM.render(
    <Panel
        {...props}
        />,
    document.getElementById('app')
);