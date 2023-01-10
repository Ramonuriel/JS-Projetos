function Tabuada() {
  let num = document.querySelector('#entrada')
  let saida = document.querySelector('#saida')

  if (num.value.length == 0) {
    window.alert('Erro. Digite um Número')
  } else {
    let n = Number(num.value)
    let c = 1
    saida.innerHTML = ``
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
    item.value = `saida${}`
      saida.appendChild(item)
      c++
    }
  }
}
