var str = "JavaScript  язык  программирования,  который  позволяет  Вам  создать  динамически  обновляемый  контент.";

function conversion() {
    var i=0;
    str=str.split('  ');  // разделение строки по пробелу в массив
    for (b of str) { // перебор значений в массиве, сколько значений на столько счетчик и увеличится.
        i+=1;
    }
    return i;
    //var a=str.length; // варианты работы с другими функциями.
    //return str;
}
console.log(conversion());


const user = (a) => ++a;

console.log(typeof(user));