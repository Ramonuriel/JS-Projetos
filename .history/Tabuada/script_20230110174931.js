function Tabuada() {
  let num = document.querySelector('#entrada')
  let saida = document.querySelector('#saida')

  if (num.value.length == 0) {
    window.alert('Erro. Digite um Número')
  } else {
    let n = Number(num.value)
    let v = 1
    while (v > 10) {
      let item = document.createElement('option')
      item.txt = `${num} x ${v} = ${num * v}`
      saida.appendChild(item)
      c
    }
  }
}
