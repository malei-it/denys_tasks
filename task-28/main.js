
(function () {
    function insert () {
         var x = prompt('введите данные'); // ввод данных юсером
         return x;
    }
    function convertToArray () { // из строки в массив
        var array=insert();
        array=array.split(' '); 
        return array;
    }
    function check () {
        var html ='';
        var array=convertToArray(); // получение данных с функции
        for (var i of array){ // перебор массива
            if ((i[0].charCodeAt()>=65)&(i[0].charCodeAt()<=90)) // проверка первой буквы
            {
                html += `<p>${i} `
            }
            else if (i[i.length-1] == '.'){ // проверка точки
                html += ` ${i}</p>`
            }
            else if (+i<999999999999999999){ //typeof +i == 'number', сейсас написан ужасное условие, 
            //но я вставил рядом вариант который хотел написать но он не сработал, так как текст тоже привоит к типу намбер
                html += `<b style=color:red>${i}</b>`
            }
            else { // остальные слова без условий
                html += ` ${i} `
            }
        }
        return html;
    

    }
    function addHTML (){ // досутп к странице и вставка набраного блока 
        var container = document.querySelector('.container');
        container.innerHTML = check();
    }
    addHTML();
    
})(); // сделлано в аннонимной функции для защиты кода