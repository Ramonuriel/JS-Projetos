btn.addEventListener('click', verificar)

function verificar() {
  var btn = document.querySelector('.btn')
  var altura = document.querySelector('.altura')
  var resultado = document.querySelector('.resultado')
  var peso = document.querySelector('#peso')
  var soma = (peso * peso) / altura
  console.log(`o peso é ${altura}`)
}
