/**
 * 1. �����������ĸҪ��д
 */
var style={color:'green'};
var Message = React.createClass({
    //render����ָ���˵��������Ⱦ ��Ⱦʲô����
    render(){
        return <h1 className="green" style={style}>hello</h1>
    }
});
ReactDOM.render(
    <Message/>,//�˴�����ʹ����ͨ��DOMԪ��һ��ʹ��Message���
    document.querySelector('#app')
);
ReactDOM.render(
    <Message/>,//�˴�����ʹ����ͨ��DOMԪ��һ��ʹ��Message���
    document.querySelector('#app1')
);