var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
var resultado = document.querySelector('.resultado')

function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  var soma = Math.trunc(peso / (altura * altura))

  if (soma < 20) {
    resultado.innerHTML = `<h3>seu imc é de ${soma} e está abaixo do necessario</h3>`
    resultado.style.texttransform = 'Uppercase'
  } else {
    resultado.innerHTML = `<h3>seu imc é de ${soma} e está no nivel necessario</h3>`
  }
}
