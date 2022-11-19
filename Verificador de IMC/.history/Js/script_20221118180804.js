var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  altura.tofixed(1)
  var soma = (altura * altura) / altura
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${soma}`)
}
