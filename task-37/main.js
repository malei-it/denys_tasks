(() => {
   const bank = document.querySelectorAll('.selected__bank'); 
   function description  () {
        let element = this.nextSibling.nextSibling; //получение доступа к след элементу после нажатого
        element.classList.toggle("selected__show"); // класс для отображения
        element.classList.toggle("selected__hide"); // клас для скрытия
        let classes = document.querySelectorAll('.selected__show') // выбор всех описаний с класом для отображения
        let coun = classes.length; // подсчет к-ва элементов с класом для отображения
        if (coun>1){
            for (i of classes){
                i.className = 'selected__hide'; 
            }
            element.className = "selected__show";
        }

  }
   const access = () => {
       for (key of bank) {
           key.onclick = description;
           //console.dir(key.nextSibling.nextSibling); 
       }
   }
   access();

   
})()