var btn = document.querySelector('.btn')

function verificar() {
  btn.addEventListener('click', verificar)
  var altura = document.querySelector('.altura')
  var peso = document.querySelector('#peso')
  var soma = (peso * peso) / altura
  var resultado = document.querySelector('.resultado')
  console.log(`o peso é ${altura}`)
}
