var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  var soma = peso / (altura * altura)
  Math.trunc()
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${soma}`)
}
