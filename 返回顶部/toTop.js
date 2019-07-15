var body = document.querySelector('body')
var toTop = document.createElement('div')
toTop.setAttribute('id', 'to-top')

toTop.style.position = 'fixed'
toTop.style.bottom = '10px'
toTop.style.right = '10px'
toTop.style.backgroundColor = 'blue'
toTop.style.height = '30px'
toTop.style.width = '30px'
toTop.style.borderRadius = '15px'
toTop.style.display = 'none'

body.appendChild(toTop)

window.onscroll = function (e) {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(scrollTop > 100){
    toTop.style.display = 'block'
  } else {
    toTop.style.display = 'none'
  }
}
toTop.onclick = function(){
  let timer = setInterval(() => {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    let speed = Math.ceil(top / 5)
    window.scrollTo(0, top - speed)
    if (top === 0) {
      clearInterval(timer)
    }
  }, 20)
}
