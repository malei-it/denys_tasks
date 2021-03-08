(() => {
    const member = document.querySelectorAll('.member');
    const names = () => {
        for (one of member) {
            let names = one.attributes[1].nodeValue;
            let secondNames = `${names} ${one.innerText}`;
            one.innerText = secondNames;
        }
    }
    names();

})()