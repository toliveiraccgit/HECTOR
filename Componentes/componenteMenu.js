const secaoMenu = document.querySelector('.navegacao__componentes')

const botaoAbreMenu = document.querySelector('.botao__abre___menu')
const botaoFechaMenu = document.querySelector('.botao__fecha___menu')

function abreMenu(){
    secaoMenu.style.display = ` flex `
    botaoAbreMenu.style.display = ` none `
    botaoFechaMenu.style.display = ` block `
}

function fechaMenu(){
    secaoMenu.style.display = ` none `
    botaoAbreMenu.style.display = ` block `
    botaoFechaMenu.style.display = ` none `
}