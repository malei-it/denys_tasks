(() => {
     const checkbox = document.querySelectorAll('.checkbox'); // выбор всех ячеек для нажатия
     const render = () => {
          for (a of checkbox){
               a.onclick = checmark; // перебор массива из ячеек
          }
     } // при добавлении в хтмл скелета, то js код будет автоматически обрабатывать новую ячейку
     render();
     function checmark () {
          this.children[0].classList.toggle('checkmark');
          this.children[0].classList.toggle('non__checkmark');
     }

})()