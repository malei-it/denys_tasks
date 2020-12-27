
(function () {
    var x = prompt('введите данные'); // получение данных
    var arrayAll = x.split('*'); //разделение по символу
    var arrayName = x.split('*',1).join().split(','); // преобразование имен в отедльный массив


    function insert () {
        var arrayPharams = []; // пустой массив для html символом
            for (i of arrayAll){ 
                arrayPharams = i; // в конце выполнения функции присвоится последний эелент из      массива тоесь хтмл
            }
        return arrayPharams;
    }
    function operate (){
        var html='';
        var a = insert(); // получения результата функции
        for (b of arrayName){ // перебор имен из массива
            for (i of a){ // перебор хтмл символов
                if (i!=='$'){ // сравнение символа вместо которого подставить имя из списка
                    html+=i;
                }
                else {
                    html+=`${b}`
                }
         }
        }
        return html;
    }
    var c= operate(); // присвоения результата работы функции
    var container = document.querySelector('.container'); // полчуние доступа в документу
    container.innerHTML = c; // вывод результата на страницу
    

        
})();