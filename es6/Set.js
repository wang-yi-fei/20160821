var books=new Set();
books.add('js');
books.add('js');
books.add('node');
console.log(books.size);
books.forEach(function (item) {
    console.log(item)
});
console.log(books.has('node'));
books.delete('node');
console.log(books.has('node'));
books.clear();
console.log(books.size);