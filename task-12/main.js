function arrError() {
    var arr = ['John!', 'what!', 'are!', 'you!', 'doing!?'];
    return arr;
}

function str (a) {
    c='';
    a = a.join();
    for (var b of a) {
        if (b!=='!'){
            c+=b;
        }
    }
    c=c.split(',');
    console.log(c);
}
str(arrError());

