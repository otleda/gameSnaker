const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const size = 30
let direction = ""

const snake = [
  {x : 200, y : 200},
  {x : 230, y : 200},
  {x : 260, y : 200}
]

const drawSnake = () => {
  ctx.fillStyle = '#ddd'
  snake.forEach((position, index) => {
    if(index == snake.length - 1){
      ctx.fillStyle = '#aaa'
    }
    ctx.fillRect(position.x, position.y, size, size)
  })
}

const moveSnake = () => {

  if(!direction) return
  const head = snake[snake.length - 1]

  if(direction == 'right') {
    snake.push({ x : head.x + size , y : head.y })
  }
  snake.shift()
}

setInterval(() => {
  ctx.clearRect(0, 0, 600, 600)
  moveSnake()
  drawSnake()
}, 300);