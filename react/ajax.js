var Suggestion = React.createClass({
    //���ó�ʼ״̬
    getInitialState:function(){
        return {}
    },
    handleChange: function () {//���ı������ı��ʱ��ִ�еĺ���
        //��ȡ �ı�������� ���ҵ��ðٶȵĽӿ� ��ȡ��� ����ʾ���б�����
        var value = this.refs.input.value;
        //
        $.ajax({
            url: 'http://www.baidu.com/su',
            type: 'get',
            jsonp: 'cb',
            dataType: 'jsonp',//ָ������������jsonp
            data: {wd: value},//Ҫ���ݵĲ�������
            processDate: true,//Ϊtrue��ʾ��Ѳ����������л��ɲ�ѯ�ַ���׷�ӵ�url����
            context:this,//ָ���ص������е�thisָ��
            success: function (result) {
                console.log(result);
                var data = result.s;
                data = data.map(function(item,index){
                    return <li key={index}>{item}</li>
                });
                this.setState({content:data});
            }
        })
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="input"
                       onChange={this.handleChange}/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<Suggestion></Suggestion>, document.querySelector('#app'));