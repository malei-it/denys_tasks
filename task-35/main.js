(() => {
    const btn = document.querySelector('.go');
    const circle = document.querySelector('.vasya');
    let left = 0;

    const sc = () => {
        left +=2;
        return left;
    }
    
    const move = () => {
        circle.style.left = `${sc()}px`
    }
    move();

    btn.onclick = ()=> setInterval(move, 10);
    
})()