(() => {
   const checks = document.querySelectorAll('.check');
   const input = document.querySelector('.input');
   const check = () => {
       for (a of checks) {
           a.onclick = select; // повесить функцию на клик на каждый чекбокс
       }
   }
   check();
   const blocks = () => {
        input.disabled = true; 
    }
    const read = () => {
        input.readOnly=true;
        input.disabled = false;
    }
    const num = () => {
        input.type='number';
        input.readOnly=false;        // выполнение функций по типу выбраного чекбокса
        input.disabled = false;
    }
    const hidden = () => {
        input.type='password';
        input.readOnly=false;
        input.disabled = false;
        input.value='';
    }
   function select () {
        for (a of checks) {
            a.checked = false;    // обнуление всех чекбоксов
        }
        this.checked=true; // нажатие выбраного чекбокса
        const block = this.value==='block'? blocks ():false; // проверка выбраного чекбокса и вызов подходящей функции
        const reads = this.value==='read'? read ():false;
        const enters = this.value==='num'? num ():false;
        const hiddens = this.value==='hidden'? hidden ():false;
   }
   

   
})()