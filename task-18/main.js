var arr = [1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0];
var repleceNum = 3;

function search () {
    for (i=0; i<arr.length; i++) { 
        if (i==0 & arr[i]==0){ // проверка на первый индекс и равенство нулю
            arr.splice(i,2,repleceNum, repleceNum);
        }
        else if ((i==arr.length-1)&(arr[i]==0)){ // проверка на последний индекс и равенство нулю
            arr.splice(i-1,2,repleceNum, repleceNum);
        }
        else if (arr[i]==0){ // проверка на равенство нулю, за исключением первого и последного индексов.
            arr.splice(i-1,3,repleceNum, repleceNum,repleceNum)
        }
    }

    return arr;
}


console.log(search());