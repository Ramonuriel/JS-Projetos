var btn = document.querySelector('.btn')
btn.addEventListener('click', verificar)
var teste = 40
var resultado = document.querySelector('.resultado')

function verificar() {
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  var soma = Math.trunc(peso / (altura * altura))

  if (soma < 18) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está abaixo do Peso e Imc recomendado, que é de 18.5 até 24.9</h3>`
    resultado.style.texttransform = 'Uppercase'
  } else if ()  {
    resultado.innerHTML = `<h2>Seu IMC é de ${soma} e está no nivel necessario</h3>`
  }
}
