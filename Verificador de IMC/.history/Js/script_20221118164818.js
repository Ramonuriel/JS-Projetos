var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura
var peso = peso.value
btn.addEventListener('click', verificar)

function verificar() {
  alert(`o valor do peso é ${peso}`)
}
