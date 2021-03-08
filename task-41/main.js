(() => {
    const strl = document.querySelector('.strl');
    const content = document.querySelector('.content__hide');

    const show = () => {
        content.classList.toggle('content');
        strl.classList.toggle('strl__hide');
    }
    strl.onclick = show;

})()