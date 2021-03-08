(() => {
    const content = document.querySelector('.content');
    console.dir(content);
    const up = document.querySelector('.up');
    const down = document.querySelector('.down');
    const right = document.querySelector('.right');
    const left = document.querySelector('.left');

    const moveUp = () => {
        content.style.marginBottom='';
        content.style.marginLeft='';
        content.style.marginRight='';
        content.style.marginTop = '0px';
    }
    const moveDown = () => {
        content.style.marginLeft='';
        content.style.marginRight='';
        content.style.marginTop = '';
        content.style.marginBottom = '0px';
    }
    const moveLeft = () => {
        content.style.marginBottom='';
        content.style.marginRight='';
        content.style.marginTop = '';
        content.style.marginLeft = '0px';
    }
    const moveRight = () => {
        content.style.marginBottom='auto';
        content.style.marginLeft='auto';
        content.style.marginTop = 'auto';
        content.style.marginRight = '0px';
    }
    up.onclick = moveUp;
    down.onclick = moveDown;
    right.onclick = moveRight;
    left.onclick = moveLeft;


})()