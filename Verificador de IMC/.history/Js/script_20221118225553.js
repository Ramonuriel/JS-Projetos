var btn = document.querySelector('.btn')
var input = document.querySelector('.input')
var resultado = document.querySelector('.resultado')
var img = document.createElement('img')
btn.addEventListener('click', verificar)
img.setAttribute('id', 'foto')

function verificar() {
  var box = document.querySelector('.box')
  var altura = document.querySelector('#altura').value
  var peso = document.querySelector('#peso').value
  var soma = Math.trunc(peso / (altura * altura))
  box.style.height = '550px'
  input.style
  resultado.style.textalign = 'center'
  if (soma <= 18) {
    img.setAttribute('src', 'Assets/abaixo-peso.png')
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você está abaixo do Peso e Imc recomendado, que é de 18.5 até 24.9</h3>`
  } else if (soma > 18 && soma < 24) {
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você  está com um peso recomendado, que é de 18.5 até 24.9</h3>`
    img.setAttribute('src', 'Assets/peso-normal.png')
  } else if (soma > 25 && soma < 30) {
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você está com sobrepeso, e IMC acima do recomendado, que é de 18.5 até 24.9. É recomendado a pratica ded exercicios!!</h3>`
    img.setAttribute('src', 'Assets/acima-peso.png')
  } else if (soma > 30 && soma < 35) {
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você está com Obesidade Grau 1, e IMC acima do recomendado, que é de 18.5 até 24.9. É recomendado a procura de um Nutricionista e a pratica de Exercicios!! </h3>`
    img.setAttribute('src', 'Assets/obesidade-grau1.png')
  } else if (soma > 35 && soma < 40) {
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você está com Obesidade grau 2 e acima do Imc recomendado, que é de 18.5 até 24.9. Por Favor procure um Nutricionista!!</h3>`
    img.setAttribute('src', 'Assets/obesidade-grau2.png')
  } else {
    resultado.innerHTML = `<h3>O Seu IMC é de ${soma} e Você está com Obesidade grau 3 e acima do Imc recomendado, que é de 18.5 até 24.9.  Por Favor procure um nutricionista urgentemente!!</h3>`
    img.setAttribute('src', 'Assets/obesidade-grau3.png')
  }
  resultado.appendChild(img)
}
