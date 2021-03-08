(() => {
    let slider = document.querySelector('.slider__container-img');
    let counter =0;
    const images = ["./emoji/img1.png", './emoji/img2.png', './emoji/img3.png', 
                    './emoji/img4.png', './emoji/img5.png', './emoji/img6.png'];
                    
    const htmlTemplate = (a) => {
        html = `<img class="slider__img" src="${images[a]}">`;
        return html;
    }
    const move = (a) => {
        let result = a < images.length ? counter = a:counter=0;
        return counter;
    }
    
    const insertHtml = () => {
        slider.innerHTML = htmlTemplate(move(counter));
        counter++;
    }
    
    setInterval(insertHtml, 2000);
})()