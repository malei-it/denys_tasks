(() => {
    const container = document.querySelector('.container');
   const btnOpen = document.querySelector('.btn');
   const contBtn = document.querySelector('.hidden');
   const close = document.querySelector('.close');
   const opens = () => {
        contBtn.classList.toggle('container__form'); 
        contBtn.classList.toggle('hidden'); 
        container.classList.toggle('container');
        container.classList.toggle('container__opened');
   }
   close.onclick = opens;
   btnOpen.onclick = opens;
})()