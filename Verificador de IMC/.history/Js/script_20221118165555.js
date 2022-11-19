var peso = document.querySelector('.peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura
btn.addEventListener('click', verificar)
peso = 80

function verificar() {
  console.log(`o peso é ${peso}`)
}
