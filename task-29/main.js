
(function () {
    var newText=''
    function insert () {
        var text = prompt('enter text');
        for (var i of text){ // перебор элементов в строке
            if ((i.charCodeAt()>=65)&(i.charCodeAt()<=95)){ // проверка большие буквы
                newText+=i;
            }
            else if ((i.charCodeAt()>=97)&(i.charCodeAt()<=122)){ // проверка маленькие буквы
                newText+=i;
            }
            else if ((i.charCodeAt()>=49)&(i.charCodeAt()<=57)){ // проверка числа
                newText+=i;
            }
            else if ((i.charCodeAt()==32)||(i.charCodeAt()==46)||(i.charCodeAt()==44)){ //проверка элементы
                newText+=i;
            }
        }
        return newText;
    }
    function htmlPage () {
        var container = document.querySelector('.container') //доступ к документу
        container.innerHTML = insert(); // добавить строку на страницу
    }
    htmlPage();
    
})(); // сделлано в аннонимной функции для защиты кода