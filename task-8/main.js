function arrString() {
    var str = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
    return str;
}
function prepareRender (b) {
    var a = '';
    for (var string of b) {
        a+=`${string} `
    }
    alert(a);
}
prepareRender(arrString());