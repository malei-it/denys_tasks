function arrLink() {
    var link = [':', '/', '/', 'www', '.', 'google', '.'];
    return link;
}
function links (a) {
    var b=document.getElementById('link');
    a.splice(0,0,'http');
    a.push('com');
    a=a.join('');
    b.innerHTML = a;
}
links(arrLink());

