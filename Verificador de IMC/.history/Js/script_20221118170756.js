var altura = window.document.querySelector('.altura')
var peso = document.querySelector('#peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura
btn.addEventListener('click', verificar)

function verificar() {
  console.log(`o peso é ${altura}`)
}
