var names = ['Alex', 'Sergei', 'Olga', 'Denis'];
var list = '';
function items (item, id){
    for (var li of item) {
        list += `<li>${li}</li>`;
    }
    var container = document.getElementById(id);
    container.innerHTML = list;
}

items (names,"list")

