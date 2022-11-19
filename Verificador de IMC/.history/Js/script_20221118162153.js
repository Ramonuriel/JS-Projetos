var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura

btn.addEventListener('onclick', verificar ())

function verificar() {
  alert('funcionando')
}
