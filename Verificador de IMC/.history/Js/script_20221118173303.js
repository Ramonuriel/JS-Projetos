var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').Value
  var soma = (peso * peso) / altura
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${soma}`)
}
