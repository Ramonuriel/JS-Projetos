function carregar() {
  var img = document.querySelector('.foto')
  var res = document.querySelector('.resultado')
  var data = new Date()
  // var hr = data.getHours()//

  hr = 17
  res.innerHTML = `<h2>Agora São ${hr} Horas </h2>`

  if (hr >= 0 && hr < 12) {
    img.src = '/Assets/dia.jpg'
    document.body.style.background = '#FEEFA4'
    document.body.projetos.style.boxS
  } else if (hr >= 12 && hr < 18) {
    img.src = '/Assets/tarde.jpg'
    document.body.style.background = '#914917'
  } else {
    img.src = '/Assets/noite.jpg'
    document.body.style.background = '#14171C'
  }
}
