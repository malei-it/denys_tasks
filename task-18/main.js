var arr = [1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0];
var repleceNum = 3;

function search () {
    for (i=0; i<arr.length; i++) {
        if (arr[i]===0){
            if (i==0){
                arr.splice(i, 2, repleceNum, repleceNum)
            }
            else if (i==arr.length-1){
                arr.splice(i-1,2,repleceNum, repleceNum)
            }
            else {
                {
                    arr.splice(i-1, 1, repleceNum, repleceNum,repleceNum )
                }
    }}}
    console.log(arr);
}
search();
