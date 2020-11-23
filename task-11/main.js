var str = 'Hello world';

function sum (summStr) {
    b=0;
    for (var a of summStr) {
        b += a.charCodeAt();
    }
    return b;
}

var res = sum(str);
alert (res);


