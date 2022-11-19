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
  } else if (soma > 18 && soma < 24) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com um peso recomendado, que é de 18.5 até 24.9</h3>`
  } else if (soma > 25 && soma < 30) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com sobrepeso, e IMC acima do recomendado, que é de 18.5 até 24.9. </h3>`
  } else if (soma > 30 && soma < 35) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com Obesidade Grau 1, e IMC acima do recomendado, que é de 18.5 até 24.9. É recomendado a procura de um Nutricionista e a pratica de Exercicios </h3>`
  } else if (soma > 35 && soma < 40) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com Obesidade grau 2 e acima do Imc recomendado, que é de 18.5 até 24.9. Por Favor procure um Nutricionista!!</h3>`
  } else {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com Obesidade grau 3 e acima do Imc recomendado, que é de 18.5 até 24.9.  Por Favor procure um nutricionista urgentemente!!</h3>`
  }
}
