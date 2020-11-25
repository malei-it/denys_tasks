function arrNumber() {
    var arr = ['234', '176', '502', '306', '412'];
    return arr;
}
function string () { 
    var str = arrNumber().join(''); // преобразование в строку.
    var arrSpace = '';
    for (var i = 0; i < str.length; i++) { // перебор строки
        if (str[i] % 2 == 0 && i != (str.length - 1)) {  // опредиление на четность и последний элемент массива
            arrSpace += `${str[i]} ` ;
        } else {
            arrSpace += str[i];
        }
    }

    var newArr = arrSpace.split(' ');

    return newArr;
}

alert(string());




