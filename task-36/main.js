(() => {
    const input = document.querySelector('.input__text');
    const btn1 = document.querySelector('.input__butoon-1');
    const btn2 = document.querySelector('.input__butoon-2');
    const added = document.querySelector('.container__add');
    let counter=1;   // счетчик
    let mas = {}; // объект для наполнения
    
    btn1.onclick = () => {
        reader();
    }
    btn2.onclick = () => {
        delet();
    }

    const reader = () => {   
        for (check in mas){   //перебор значений объекта
            if (mas[check]===input.value) { 
                return; // если значение уже есть прекратитьвыполнение функции
            }
        }
        mas[counter]=input.value; //проверка прошла и нет значений добавить в объект
        added.innerHTML+=`<div class="container__inputed">#${counter}${mas[counter]}</div>`;
        counter++;   
        }
    
        
    const delet = () => {
        mas={};
        input.value='';
        added.innerHTML='';
    }
    
})()