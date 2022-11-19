var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
var resultado = document.querySelector('.resultado')

function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  var soma = Math.trunc(peso / (altura * altura))

  if (soma < 20) {
    resultado.innerHTML = ``
  } else {
  }
}
