const timeLeft = document.querySelector('#time-left')

const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')

let score = document.querySelectorAll('#score')

let result = 0
let currentTime = timeLeft.textContent

// function randomSquare() {
//   squares.forEach((square) => {
//     square.classList.remove('mole')
//   })

//   let randomSquare = squares[Math.floor(Math.random() * 9)]
//   randomSquare.classList.add('mole')

//   hitPosition = randomSquare.id
// }

function randomSquare() {
  // Remove class from divs
  square.forEach((className) => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //   Pass /Assign the id of randomPosition to hit position to use later

  hitPosition = randomPosition.id
}

square.forEach((id) => {
  id.addEventListener('mouseup', () => {
    if ((id.id = hitPosition)) {
      result = result + 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}
moveMole()

// Count down function
function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timerId)
    alert('Game Over! Your final score is ' + result)
  }
}
let timerId = setInterval(countDown, 1000)
