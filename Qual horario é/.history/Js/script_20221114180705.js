function carregar() {
  var img = document.querySelector('.foto')
  var res = document.querySelector('.resultado')
  var data = new Date()
  var hr = data.getHours()

  res.innerHTML = `<Agora São ${hr} Horas`
  document.res.style.fontSize = '20px'

  if (hr >= 0 && hr < 12) {
    img.src = '/Assets/verão.jpg'
    document.body.style.background = '#C08B45'
  } else if (hr >= 12 && hr < 18) {
    img.src = '/Assets/outono.jpg'
    document.body.style.background = '#944500'
  } else {
    img.src = '/Assets/inverno.jpg'
    document.body.style.background = '#2D3945'
  }
}
