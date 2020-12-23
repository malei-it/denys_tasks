
(function () {
    var x = prompt('введите данные');

    function insert () {
        var a = x.split('/', 1); // разделение по патерну
        a = a.join(''); // преобразование в тсроку
        return a;
    }
        

    function check () {
        var str = insert(); // получение строки из функции
        var c=''; // переменая для строки после знака "/"
        var b=0; // счетсик для сравнение первых символов (имен)
        for (i of x){ // перебрать все буквы входящей строки
            if (str[b]==i){ // сравнение имен
                b++;
            }
            else {
                c+=i; // наполнение строки после символа "/"
            }
        }
        return c;
    }
    check();
    function addHtml () {
        a=insert(); // получение строки имен
        a = a.split(','); // преобразование в массив
        html='';
        str = check(); // получение строки после знака "/"
        for (d of a){  // перебор имен из массива
            for (i of str) { // перебор строки
                if (i=='$'){ // подстановка переменой вместо элемента 
                html+=d;
                }
                else {
                    html+=i;}}}
        return html;
    }

    var c= addHtml();
    console.log(c);
    var container = document.querySelector('.container');
    container.innerHTML = c;
    

        
})();