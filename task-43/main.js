(() => {
    const objData ={
        name:false,
        age:false,
        email:false
    };
    // input name
    
    const inputName = document.querySelector('.input__name');
    const inputNameHint = document.querySelector('.input__hide-name');
    const changeNH = () => {
        if (inputName.value.length >= 0){
            inputNameHint.classList='input__name-hint';
        }
    }
    inputName.onkeypress = changeNH;
    inputName.onchange = () => {
        for (a of inputName.value){
            let b = a.charCodeAt();
            if ((b>=97&&b<=122) || (b>=65&&b<=90)){
                inputNameHint.classList='input__hide-name';
                objData.name = true;
            }
            else{
                inputNameHint.classList='input__name-hint';
                inputName.classList='input__name-invalid';
                objData.name = false;
                return;
            }
        }
        inputName.classList='input__name-valid';
    }
    //input age

    const age = document.querySelector('.input__age');
    const inputAgeHint = document.querySelector('.input__hide-age');
    age.onkeypress = () => {
        if (age.value >= 0){
            inputAgeHint.classList='input__age-hint';
        }
    }
    age.onchange = () => {
            if (age.value>=7&&age.value<=99){
                inputAgeHint.classList='input__hide-age';
                objData.age =true;
            }
            else{
                inputAgeHint.classList='input__age-hint';
                age.classList='input__age-invalid';
                objData.age =false;
                return;
        }
        age.classList='input__age-valid';
    }

    //input email

    const email = document.querySelector('.input__email');
    const inputEmailHint = document.querySelector('.input__hide-email');
    email.onkeypress = () => {
        if (email.value.length >= 1){
            inputEmailHint.classList='input__email-hint';
            email.classList='input__email-invalid';
        }
    }
    email.onchange = () => {
            let num = email.value.charCodeAt();
            let sim = email.value.includes('@');  
            if ((num>=33&&num<=122)&&(sim)){
                inputEmailHint.classList='input__hide-email';
                objData.email =true;
            }
            else{
                inputEmailHint.classList='input__email-hint';
                email.classList='input__email-invalid';
                objData.email =false;
                return;
        }
        email.classList='input__email-valid';
    }

    // alert
    const sebdBtn = document.querySelector('.banks__btn');
    const checbox = document.querySelector('.input__check');
    const payPrivat = document.querySelector('.banks__privat-input');
    const payMono = document.querySelector('.banks__mono-input');

    // проверка значений из массива которые долдны были поменятся на тру в процессе валидации

    const check = () => {
        for (a in objData){
            if (objData[a]){
                continue;
            }
            else{
               alert (`Заполните имя, возраст и email коректно`);
               return;
            }
        }
        alert (`Данные отправлены 
        name: ${inputName.value}
        age: ${age.value}
        email: ${email.value}
        ${sender()}
        ${payment()}`);
        cleaner();
    }
    // проверка подписки
    let sender = () => {
        if (checbox.checked) {
            return `Спасибо что подписались на нашу рассылку`
        }
        else {
            return '';
        }
    }
    // проверка банка
    let payment = () => {
        if (payPrivat.checked){
            return  `Вы выбрали метод оплаты: ${payPrivat.value}`
        }
        else if (payMono.checked) {
            return `Вы выбрали метод оплаты: ${payMono.value}`
        }
        else {
            return;
        }
    }

    sebdBtn.onclick = check;
    // очистка всех полей, сработает по порядку после успешной валидации и алерта с успешным вводом
    const cleaner = ()=> {
        inputName.value='';
        inputName.className='input__name';
        age.className='input__age';
        age.value='';
        email.value='';
        email.className='input__email';
        checbox.checked =false;
        payPrivat.checked=false;
        payMono.checked=false;
    }

   
   
})()