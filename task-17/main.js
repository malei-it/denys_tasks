var arr = [2, 19, 50, 17, 23, 62, 25, 12, 88, 34, 97, 71, 68, 2, 42, 44];
var num = 50;

function meanNumber() {
    var a =0;
    for (var b of arr) { 
        a+=b;   // сложение всех чисел
    }
    a=a/arr.length; // поделить сумму всех чисел на к-во чисел, для нахождения среднего числа.
    return a;
}
function replacement() {
    for (i=0; i<arr.length; i++) {
        if (arr[i]>num) {
            arr.splice(i, 1, meanNumber())
        }
        else {
            continue;
        }
    }
    return arr;
}
console.log(replacement());
