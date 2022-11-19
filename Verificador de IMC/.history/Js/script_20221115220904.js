var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')
var btn = document.querySelector('.btn')
var resultado = document.querySelector('.resultado')
var soma = (peso * peso) / altura

btn.addEventListener('click', clicar())
function clicar() {
  if (soma < 18) {
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está abaixo do Imc recomendado, que é de 18.5 até 24.9</h3>`
  }else if (soma > 18 && soma < 25){
    resultado.innerHTML = `<h3>O seu IMC é de ${soma} e está com  do Imc recomendado, que é de 18.5 até 24.9</h3>`
  }
}
