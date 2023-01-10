function contar() {
  let inicio = document.querySelector('#inicio')
  let fim = document.querySelector('#Fim')
  let passo = document.querySelector('#Passo')
  let res = document.querySelector('.resultado')

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0

    
  ) {
    window.alert('[ERRO] Preencha todos os campos.')
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p)
    
    if (i < f)
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1f449}, `
      }
    else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1f449} `
      }
    }
  }
}
