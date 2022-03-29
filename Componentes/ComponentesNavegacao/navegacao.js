/*--------------------------------------VISAO-GERAL-------------------------------------*/
const secaoVisaoGeral = document.querySelector('#lista__visao-geral')
const botaoAbreVisaoGeral = document.querySelector('.titulo__item___lista-abre-visao-geral')
const botaoFechaVisaoGeral = document.querySelector('.titulo__item___lista-fecha-visao-geral')
const vetorAbreVisaoGeral = document.querySelector('#vetor-abre-visao-geral')
const vetorFechaVisaoGeral = document.querySelector('#vetor-fecha-visao-geral')

function abreVisaoGeral(){
    secaoVisaoGeral.style.height = ` 7.65rem `
    botaoAbreVisaoGeral.style.display = ` none `
    botaoFechaVisaoGeral.style.display = ` flex `

    vetorAbreVisaoGeral.style.animation = ` voltaVetor.3s ease-in-out forwards `
    vetorFechaVisaoGeral.style.animation = `  rotacionaVetor .3s ease-in-out forwards `
}

function fechaVisaoGeral(){
    secaoVisaoGeral.style.height = ` 1.625rem `
    botaoAbreVisaoGeral.style.display = ` flex `
    botaoFechaVisaoGeral.style.display = ` none `

    vetorAbreVisaoGeral.style.animation = ` voltaVetor .3s ease-in-out forwards `
    vetorFechaVisaoGeral.style.animation = ` rotacionaVetor .3s ease-in-out forwards `
}



/*-----------------------------------------PROJETO----------------------------------------*/
const secaoProjeto = document.querySelector('#lista__projeto')
const botaoAbreProjeto = document.querySelector('.titulo__item___lista-abre-projeto')
const botaoFechaProjeto = document.querySelector('.titulo__item___lista-fecha-projeto')
const vetorAbreProjeto = document.querySelector('#vetor-abre-projeto')
const vetorFechaProjeto = document.querySelector('#vetor-fecha-projeto')

function abreProjeto(){
    secaoProjeto.style.height = ` 19.7rem `
    botaoAbreProjeto.style.display = ` none `
    botaoFechaProjeto.style.display = ` flex `

    vetorAbreProjeto.style.animation = ` voltaVetor.3s ease-in-out forwards `
    vetorFechaProjeto.style.animation = `  rotacionaVetor .3s ease-in-out forwards `
}

function fechaProjeto(){
    secaoProjeto.style.height = ` 1.625rem `
    botaoAbreProjeto.style.display = ` flex `
    botaoFechaProjeto.style.display = ` none `

    vetorAbreProjeto.style.animation = ` voltaVetor .3s ease-in-out forwards `
    vetorFechaProjeto.style.animation = ` rotacionaVetor .3s ease-in-out forwards `
}



/*--------------------------------------COMPONENTES-------------------------------------*/
const secaoComponentes = document.querySelector('#lista__componentes')
const botaoAbreComponentes = document.querySelector('.titulo__item___lista-abre-componentes')
const botaoFechaComponentes = document.querySelector('.titulo__item___lista-fecha-componentes')
const vetorAbreComponentes = document.querySelector('#vetor-abre-componentes')
const vetorFechaComponentes = document.querySelector('#vetor-fecha-componentes')

function abreComponentes(){
    secaoComponentes.style.height = ` 19.7rem `
    botaoAbreComponentes.style.display = ` none `
    botaoFechaComponentes.style.display = ` flex `

    vetorAbreComponentes.style.animation = ` voltaVetor.3s ease-in-out forwards `
    vetorFechaComponentes.style.animation = `  rotacionaVetor .3s ease-in-out forwards `
}

function fechaComponentes(){
    secaoComponentes.style.height = ` 1.625rem `
    botaoAbreComponentes.style.display = ` flex `
    botaoFechaComponentes.style.display = ` none `

    vetorAbreComponentes.style.animation = ` voltaVetor .3s ease-in-out forwards `
    vetorFechaComponentes.style.animation = ` rotacionaVetor .3s ease-in-out forwards `
}



/*-------------------------------------UTILITARIOS------------------------------------*/
const secaoUtilitario = document.querySelector('#lista__utilitario')
const botaoAbreUtilitario = document.querySelector('.titulo__item___lista-abre-utilitario')
const botaoFechaUtilitario = document.querySelector('.titulo__item___lista-fecha-utilitario')
const vetorAbreUtilitario = document.querySelector('#vetor-abre-utilitario')
const vetorFechaUtilitario = document.querySelector('#vetor-fecha-utilitario')

function abreUtilitario(){
    secaoUtilitario.style.height = ` 7.65rem `
    botaoAbreUtilitario.style.display = ` none `
    botaoFechaUtilitario.style.display = ` flex `

    vetorAbreUtilitario.style.animation = ` voltaVetor.3s ease-in-out forwards `
    vetorFechaUtilitario.style.animation = `  rotacionaVetor .3s ease-in-out forwards `
}

function fechaUtilitario(){
    secaoUtilitario.style.height = ` 1.625rem `
    botaoAbreUtilitario.style.display = ` flex `
    botaoFechaUtilitario.style.display = ` none `

    vetorAbreUtilitario.style.animation = ` voltaVetor .3s ease-in-out forwards `
    vetorFechaUtilitario.style.animation = ` rotacionaVetor .3s ease-in-out forwards `
}