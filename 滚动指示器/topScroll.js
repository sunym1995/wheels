var body = document.querySelector('body')
var topSctoll = document.createElement('div')
topSctoll.setAttribute('id', 'top-scroll')

topSctoll.style.position = 'fixed'
topSctoll.style.top = '0px'
topSctoll.style.left = '0px'
topSctoll.style.backgroundColor = 'blue'
topSctoll.style.height = '5px'
topSctoll.style.width = '0px'

body.appendChild(topSctoll)

window.onscroll = function (e) {
  topSctoll.style.width = String(topSctollwidth()*100) + '%'
}

function topSctollwidth() {
  
  // 文档高度
  var docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight)

  // 视口高度
  var viewPortHeight = window.innerHeight; //innerHeight不属于W3C技术规范或推荐
  // 差值
  var sHeight = Math.max(docHeight - viewPortHeight, 0);
  // 滚动条垂直偏移量
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return sHeight ? scrollTop / sHeight : 0;
}