var books = new Map();
books.set('js',{name:'js'});//��map�����Ԫ��
books.set('html',{name:'html'});
console.log(books.size);//�鿴�����е�Ԫ��
console.log(books.get('js'));//ͨ��key��ȡֵ
books.delete('js');//ִ��keyɾ��Ԫ��
console.log(books.has('js'));//�ж�map����û��key
books.forEach((value, key) => { //forEach���Ե���map
    console.log( key + ' = ' + value);
});
books.clear();//���map]
console.log(books.size);