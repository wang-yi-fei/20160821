module.exports= function (name) {
    /**
     * ��ȡ���������е�DEBUGֵ ������Լ�������һ�� �����msg
     * �����һ�� ʲô������
     */
    return function (msg) {
        var debug=process.env.DEBUG;
        debug=debug.replace('*','.*');
        var ergex=new RegExp(debug);
        if(ergex.test(name)){
            console.log(msg)
        }
    }
};