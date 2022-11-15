function carregar() {
  var projeto = document.querySelector('.projeto')
  var img = document.querySelector('.foto')
  var res = document.querySelector('.resultado')
  var data = new Date()
  // var hr = data.getHours()//

  hr = 7
  res.innerHTML = `<h2>Agora São ${hr} Horas </h2>`

  if (hr >= 0 && hr < 12) {
    img.src = '/Assets/dia.jpg'
    document.body.style.background = '#FEEFA4'
    projeto.style.boxShadow = '10px 20px 30px red'
  } else if (hr >= 12 && hr < 18) {
    img.src = '/Assets/tarde.jpg'
    document.body.style.background = '#914917'
  } else {
    img.src = '/Assets/noite.jpg'
    document.body.style.background = '#14171C'
  }
}
