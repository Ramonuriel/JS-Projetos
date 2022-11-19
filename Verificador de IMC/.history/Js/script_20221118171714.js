var peso = document.querySelector('#peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura
btn.addEventListener('click', verificar)

function verificar() {
  var altura = document.querySelector('.altura')
  console.log(`o peso é ${altura}`)
}
