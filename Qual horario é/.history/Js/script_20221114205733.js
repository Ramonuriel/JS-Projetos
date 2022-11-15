function carregar() {
  var projeto = document.querySelector('.projeto')
  var img = document.querySelector('.foto')
  var res = document.querySelector('.resultado')
  var data = new Date()
  // var hr = data.getHours()//


  res.innerHTML = `<h2>Agora São ${hr} Horas </h2>`

  if (hr >= 0 && hr < 12) {
    img.src = '/Assets/dia.jpg'
    projeto.style.background = '#663D21'
    document.body.style.background = '#FEEFA4'
    projeto.style.boxShadow = ' 1px 1px 4px 4px #C8B5A0'
  } else if (hr >= 12 && hr < 18) {
    img.src = '/Assets/tarde.jpg'
    document.body.style.background = '#914917'
    projeto.style.background = '#330A03'
    projeto.style.boxShadow = '1px  1px  4px  4px  #FFB32A'
  } else {
    img.src = '/Assets/noite.jpg'
    document.body.style.background = '#14171C'
    projeto.style.boxShadow = '1px 1px 4px 4px #162838'
  }
}
