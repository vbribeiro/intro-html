const btnHtml = document.querySelector('#btn-html'),
btnCss = document.querySelector('#btn-css'),
btnJs = document.querySelector('#btn-js');

btnHtml.addEventListener("click", function() {
    alert("Olá, eu sou o HTML!");
});

btnCss.addEventListener("click", function() {
    alert("Olá, eu sou o Css!");
});

btnJs.addEventListener("click", function() {
    alert("Olá, eu sou o JavaScript!");
});