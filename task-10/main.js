function whatsIt() {
    var str = 'BoMpWel';
    return str;
}


function nameAuto (a) {
    var container ='';
    var b = '';
    var c ='';
    var d ='';
    for (var name of a) {
        if ((name.charCodeAt() >= 65) && (name.charCodeAt() <= 90)) {
            b +=name;
        }
        else {
            c+=name;
        }
    }
    d = `<li>${b}</li><li>${c}</li>`
    container = document.getElementById('list');
    container.innerHTML = d;
    
}

nameAuto(whatsIt());

