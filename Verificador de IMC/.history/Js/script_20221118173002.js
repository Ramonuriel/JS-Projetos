var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
function verificar() {
  var altura = document.querySelector('#altura')
  var peso = document.querySelector('#peso')
  var altura = altura.Value;
  var peso = peso.Value
  var soma = (peso * peso) / altura
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${teste}`)
}
