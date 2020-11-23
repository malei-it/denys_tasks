function arrNumber() {
    var arr = ['234', '176', '502', '306', '412'];
    return arr;
}
function string (str) { 
    var b = '';
    var d = '';
    for (var a of str) { // набор в строку
        b += a;
    }
    for (var c of b){ // проверка на четность числа
        if (c%2===0) {
            d += `${c} `;
        }
        else {
            d += `${c}`;
        }

    }
    d = d.slice(0,-1); // используется, чтобы убрать проблем после последнего значения.
    d = d.split(' '); 
    return d;
}

console.log(string(arrNumber()));

