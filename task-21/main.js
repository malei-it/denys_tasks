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

function arrayCreation2(n){
    var a=[]
    for (i=0;i<n;i++){
        a[i]=i+1;
    }
    return a;
}

console.log(arrayCreation2(5));
