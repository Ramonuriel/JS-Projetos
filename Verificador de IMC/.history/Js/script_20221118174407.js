var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  peso.tofixed(1)
  var soma = (peso * peso) / altura
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${soma}`)
}
