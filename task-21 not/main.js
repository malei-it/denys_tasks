function arrayCreation1() {
    var a =[]; // пустой масив который будет заполнятся
    var b=1;
    for (i=0; i<5; i++){ //счетчик длины масива
        a[i]=b; //наполнение масива
        b++; //увеличение аргумента в масиве
    }
    return a;
}
console.log(arrayCreation1());



