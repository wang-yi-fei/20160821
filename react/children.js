var Person = React.createClass({
    render: function() {
        return (
            <ol>
                {//this.props.children 指的是
                    React.Children.map(this.props.children,
                        function (item,index) {
                            return <li key={index}>{item}</li>;
                        })
                }
            </ol>
        );
    }
});

ReactDOM.render(
    <Person>
        <span>大毛</span>
        <span>二毛</span>
        <span>三毛</span>
    </Person>,
    document.getElementById('app')
);