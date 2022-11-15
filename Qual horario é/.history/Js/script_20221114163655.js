function carregar() {
  var img = document.querySelector('.foto')
  var description = document.querySelector('.description')
  var data = new Date()
  var hr = data.getHours()
  description.innerHTML = `Agora São ${hr} Horas`

  if (hr >= 0 && hr < 12) {
    img.src = 'verão.jpg'
    document.body.style.background = '#654286'
  } else if (hr >= 12 && hr < 18) {
    img.src = 'outono.jpg'
    document.body.style.background = '#944500'
  } else {
    img.src = 'inverno.jpg'
    document.body.style.background = '#457788'
  }
}
