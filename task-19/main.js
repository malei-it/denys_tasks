var arr1 = [14, 111, 44, 34, 66, 11, 77, 51, 10, 4, 73];
var arr2 = [4, 2, 5];
function summ () { // суммирование массива 2;
    a=0;
    for (var a of arr2) {
        a+=a;
    }
    return a;
}
function checking() {
    for (b of arr1) { //перебор масива 1 по значениям;
        if (b==summ()){ // сравнивание суммы массива 2 со значением массива 1
            c=b==summ(); // присвоения типа булеан;
            console.log(c); // вывод в консоль переменой которая содержит тип булеан;
        }
        else {
            c=b==summ(); // присвоения типа булеан;
            console.log(c); // вывод в консоль переменой которая содержит тип булеан;
        }
    }
    
}
checking();