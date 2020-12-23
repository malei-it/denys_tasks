
(function () {
    var result = {
    };
    var text = prompt('enter text');
    var search = prompt('enter search names')
    text=text.split(' ');
    search=search.split(',');
    
    function check () {
        for (var i of text) { // перебираю значения из массива слов
            for (var b=0; search.length-1>=b; b++){ // перебираю значениия из массива слов по которым искать, сделанно для автоматизации
                if (i==search[b]){ // сравниваю первое и второе слово со словами из первого массива
                    if (result[search[b]] ==1) { // в случае совпаления слов, и если значения ключу уже заданы увеличиваю на единицу счетчик
                        result[search[b]] +=1
                    }
                    else { //в случае совпаления слов, если значения ключа объекта undefined заданую ему стартовые значения
                        result[search[b]] =1;
                    } 
            }
        }}
        return result;
    }
    function htmlAdd () {
        var result = check(); // получаю ссылку на массив
        var html='';
        for (i in result){
            html += `<p>${i}:${result[i]}</p>` // набираю строку значение из объекта
        }
        var container = document.querySelector('.container')
        container.innerHTML = html;
    }
    htmlAdd();
})(); // сделлано в аннонимной функции для защиты кода