function clickMenu() {
    var itens = document.getElementById('burguer-menu')
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('burguer-menu');
    var burguerIcon = document.getElementById('burguer');
    
    if (!menu.contains(event.target) && !burguerIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});