const title = document.getElementById("title");
const title2 = document.querySelector("#title");
const listItems = document.querySelectorAll("ul li");
const secondItem = document.querySelector("ul li:nth-child(2)");
title.style.background = "yellow";
console.log(title);
console.log(title2);
console.log(listItems);
console.log(secondItem);

const holaMundo = () => {
  title.style.background = "red";
};

const holaMundo2 = () => {
  title.style.background = "purple";
};

title.addEventListener("click", holaMundo);

document.querySelector("button").addEventListener("click", holaMundo2);

// title.addEventListener("contextmenu", (e) => {
//   console.log(e.pageX, e.pageY);
//   e.preventDefault();
// });

//title.addEventListener('eventName eventHandler)
const holaMundo3 = (e) => alert(e.target.textContent);
title.addEventListener("click", (e) => {
  holaMundo3(e);
});
document.querySelector("button").addEventListener("click", (e) => {
  holaMundo3(e);
});


const createMenu = e => {
  const menu = document.createElement('div')
  menu.id = 'context-menu'
  const perveMenu = document.getElementById('context-menu')
  menu.textContent = 'Soy un menu contextual'

  if(perveMenu) document.body.removeChild(perveMenu)
  document.body.appendChild(menu)

  menu.style.padding = '1em'
  menu.style.background = '#eee'
  menu.style.position = 'fixed'
  menu.style.top = `${e.pageY}px`
  menu.style.left = `${e.pageX}px`
}

document.addEventListener('contextmenu', e => {
  createMenu(e)
  e.preventDefault()
})

const input = document.getElementById('input')

input.addEventListener('keyup', e => {
  console.log(e.key)
  console.log(e.altKey)
  console.log(e.ctrlKey)
})

let x = 0, y = 0
addEventListener('keyup', e => {

  const ball = document.getElementById('ball')
  const move = direction => {
    switch (direction) {
      case 'up':
        y--
        break;
      case 'down':
        y++
        break;
      case 'left':
        x--
        break;
      case 'right':
        x++
        break;
      default:
        break;
    } 
    ball.style.transform = `translate(${x*20}px, ${y*20}px)`
  }
  switch (e.key) {
    case 'ArrowUp':
      move('up')
      break;
    case 'ArrowDown':
      move('down')
      break;
    case 'ArrowLeft':
      move('left')
      break;
    case 'ArrowRight':
      move('right')
      break;
    default:
      break;
  }
})


const video = document.getElementById('video'),
playButton = document.getElementById('play'),
pauseButton = document.getElementById('pause')

playButton.addEventListener('click', () => {
  video.play()
})

pauseButton.addEventListener('click', () => {
  video.pause()
})

/**
 * Manipular el DOM
 * ejercicio con insertBefore()
 */

const post = document.getElementById('post')
const ad = document.createElement('div')
ad.id = 'EDTeam'
ad.textContent = 'Publicidad'

const getMiddleChild = element => {
  const childs = element.children,
        l = childs.length,
        i = Math.floor(l / 2)
  return childs[i]
}

const middleChild = getMiddleChild(post)
post.insertBefore(ad, middleChild)

// reloj
setInterval(() => {
  const clock = document.getElementById('clock')
  if(clock) clock.textContent = new Date().toLocaleTimeString()
}, 1000);