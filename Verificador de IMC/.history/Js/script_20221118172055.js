var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
function verificar() {
  var altura = document.querySelector('altura')
  var peso = document.querySelector('#peso')
  var soma = (peso * peso) / altura
  var resultado = document.querySelector('.resultado')
  alert(`o peso é ${peso}`)
}
