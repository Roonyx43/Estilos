function alterarCor(cor){
    var input = document.getElementById('escolher')
    var cor = input.value
        if (cor === "1") {
            document.body.style.backgroundColor = '#f4b41a';
            document.body.style.color = '#143d59'
            document.querySelector('header').style.backgroundColor = '#143d59'
            document.querySelector('header').style.color = '#f4b41a'
            document.querySelector('input').style.backgroundColor = '#143d59'
            document.querySelector('input').style.color = '#f4b41a'
            document.querySelector('button').style.backgroundColor = '#143d59'
            document.querySelector('button').style.color = '#f4b41a'
            document.querySelector('menu').style.backgroundColor = '#143d59'
        } else if (cor === "2") {
            document.body.style.backgroundColor = '#210070';
            document.body.style.color = '#40e0d0'
            document.querySelector('header').style.backgroundColor = '#40e0d0'
            document.querySelector('header').style.color = '#210070'
            document.querySelector('input').style.backgroundColor = '#40e0d0'
            document.querySelector('input').style.color = '#210070'
            document.querySelector('button').style.backgroundColor = '#40e0d0'
            document.querySelector('button').style.color = '#210070'
            document.querySelector('menu').style.backgroundColor = '#40e0d0'
        } else if (cor === "3") {
            document.body.style.backgroundColor = '#ffe042';
            document.body.style.color = '#e71989'
            document.querySelector('header').style.backgroundColor = '#e71989'
            document.querySelector('header').style.color = '#ffe042'
            document.querySelector('input').style.backgroundColor = '#e71989'
            document.querySelector('input').style.color = '#ffe042'
            document.querySelector('button').style.backgroundColor = '#e71989'
            document.querySelector('button').style.color = '#ffe042'
            document.querySelector('menu').style.backgroundColor = '#e71989'
        } else if (cor === "4") {
            document.body.style.backgroundColor = '#ffa781';
            document.body.style.color = '#5b0e2d'
            document.querySelector('header').style.backgroundColor = '#5b0e2d'
            document.querySelector('header').style.color = '#ffa781'
            document.querySelector('input').style.backgroundColor = '#5b0e2d'
            document.querySelector('input').style.color = '#ffa781'
            document.querySelector('button').style.backgroundColor = '#5b0e2d'
            document.querySelector('button').style.color = '#ffa781'
            document.querySelector('menu').style.backgroundColor = '#5b0e2d'
        } else if (cor === "5") {
            document.body.style.backgroundColor = '#030E4F';
            document.body.style.color = '#F49F1C'
            document.querySelector('header').style.backgroundColor = '#F49F1C'
            document.querySelector('header').style.color = '#030E4F'
            document.querySelector('input').style.backgroundColor = '#F49F1C'
            document.querySelector('input').style.color = '#030E4F'
            document.querySelector('button').style.backgroundColor = '#F49F1C'
            document.querySelector('button').style.color = '#030E4F'
            document.querySelector('menu').style.backgroundColor = '#F49F1C'
        } else if (cor === "6") {
            document.body.style.backgroundColor = '#efc8b1';
            document.body.style.color = '#514644'
            document.querySelector('header').style.backgroundColor = '#514644'
            document.querySelector('header').style.color = '#efc8b1'
            document.querySelector('input').style.backgroundColor = '#514644'
            document.querySelector('input').style.color = '#efc8b1'
            document.querySelector('button').style.backgroundColor = '#514644'
            document.querySelector('button').style.color = '#efc8b1'
            document.querySelector('menu').style.backgroundColor = '#514644'
        } else if (cor === "7") {
            document.body.style.backgroundColor = '#5e057e';
            document.body.style.color = '#c299d0'
            document.querySelector('header').style.backgroundColor = '#c299d0'
            document.querySelector('header').style.color = '#5e057e'
            document.querySelector('input').style.backgroundColor = '#c299d0'
            document.querySelector('input').style.color = '#5e057e'
            document.querySelector('button').style.backgroundColor = '#c299d0'
            document.querySelector('button').style.color = '#5e057e'
            document.querySelector('menu').style.backgroundColor = '#c299d0'
        } else if (cor === "8") {
            document.body.style.backgroundColor = '#0f4d19';
            document.body.style.color = '#6fc27c'
            document.querySelector('header').style.backgroundColor = '#6fc27c'
            document.querySelector('header').style.color = '#0f4d19'
            document.querySelector('input').style.backgroundColor = '#6fc27c'
            document.querySelector('input').style.color = '#0f4d19'
            document.querySelector('button').style.backgroundColor = '#6fc27c'
            document.querySelector('button').style.color = '#0f4d19'
            document.querySelector('menu').style.backgroundColor = '#6fc27c'
        } else if (cor === "9") {
            document.body.style.backgroundColor = '#f6b60d';
            document.body.style.color = '#372800'
            document.querySelector('header').style.backgroundColor = '#372800'
            document.querySelector('header').style.color = '#f6b60d'
            document.querySelector('input').style.backgroundColor = '#372800'
            document.querySelector('input').style.color = '#f6b60d'
            document.querySelector('button').style.backgroundColor = '#372800'
            document.querySelector('button').style.color = '#f6b60d'
            document.querySelector('menu').style.backgroundColor = '#372800'
        } else if (cor === "10") {
            document.body.style.backgroundColor = '#390879';
            document.body.style.color = '#b8df10'
            document.querySelector('header').style.backgroundColor = '#b8df10'
            document.querySelector('header').style.color = '#390879'
            document.querySelector('input').style.backgroundColor = '#b8df10'
            document.querySelector('input').style.color = '#390879'
            document.querySelector('button').style.backgroundColor = '#b8df10'
            document.querySelector('button').style.color = '#390879'
            document.querySelector('menu').style.backgroundColor = '#b8df10'
        } else if (cor === "0") {
            document.body.style.backgroundColor = '#4169e1';
            document.body.style.color = '#c0c0c0'
            document.querySelector('header').style.backgroundColor = '#c0c0c0'
            document.querySelector('header').style.color = '#4169e1'
            document.querySelector('input').style.backgroundColor = '#c0c0c0'
            document.querySelector('input').style.color = '#4169e1'
            document.querySelector('button').style.backgroundColor = '#c0c0c0'
            document.querySelector('button').style.color = '#4169e1'
            document.querySelector('menu').style.backgroundColor = '#c0c0c0'
        } else{
            window.alert('Você precisa escolher um número de 0 a 10.')
        } 
    
    input.value=''
}

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('escolher');

    inputElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            alterarCor();
        }
    });
});