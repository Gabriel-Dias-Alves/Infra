let valorAtual = 0
const elementoContador = document.getElementById('contador')

function atualizar() {
    elementoContador.textContent = valorAtual

    if(valorAtual < 0) {
        elementoContador.style.color = '#f70909fb'
}   else if(valorAtual > 0) {
        elementoContador.style.color = '#03ec2afb'
}   else {
      elementoContador.style.color = '#000000e1'
}}

function diminuir() {
    valorAtual--
    atualizar()
}
function aumentar() {
    valorAtual++
    atualizar()
}
function zerar() {
    valorAtual = 0
    atualizar()
}

diminuir()
aumentar()
zerar()