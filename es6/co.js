/**
 * 1��дһ���������������Զ�ִ�����
 * Ҫ�� ����һ������ ��������2����  ���غ������첽��
 * */
function double(val){
    return function (next) {
        setTimeout(function () {
            next(val*2);
        },500);
    }
}
function* read(){
    var one=yield  double(1);
    var two=yield  double(one);
    var three=yield  double(two);
    console.log(three)
};
function co(fn){
    var it =read();//����һ��������
    next();
    function next(val){
        var a=it.next(val);
        if(!a.done){
            a.value(next)
        }
    }
};
co(read);