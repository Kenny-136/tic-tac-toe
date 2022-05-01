var parentBox = document.querySelector('.gameBox')
var allDivElement = document.querySelectorAll('div')
var progressTracker = document.querySelector('h2')
var numOfTurns = 0
var p1ScoreTracker = 0
var p2ScoreTracker = 0

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var box9 = document.querySelector('#box9')
var allBox = document.querySelectorAll('.allBox')
var rstBtn = document.querySelector('#resetButton')
var p1ScoreBox = document.querySelector('#p1Score')
var p2ScoreBox = document.querySelector('#p2Score')
var gameEnd = false

var p1name = document.querySelector('#player1name')
var p2name = document.querySelector('#player2name')
var player1NameInput = document.querySelector('#p1nameInput')
var player2NameInput = document.querySelector('#p2nameInput')
var p1NameBtn = document.querySelector('#p1nameBtn')
var p2NameBtn = document.querySelector('#p2nameBtn')

p1NameBtn.addEventListener('click', function() {
    p1name.textContent = player1NameInput.value
})
p2NameBtn.addEventListener('click', function() {
    p2name.textContent = player2NameInput.value
})


function checkWinningCondition() {
    if ((box1.textContent == 'X' && box2.textContent == 'X' && box3.textContent == 'X') ||
        (box4.textContent == 'X' && box5.textContent == 'X' && box6.textContent == 'X') ||
        (box7.textContent == 'X' && box8.textContent == 'X' && box9.textContent == 'X') ||
        (box1.textContent == 'X' && box4.textContent == 'X' && box7.textContent == 'X') ||
        (box2.textContent == 'X' && box5.textContent == 'X' && box8.textContent == 'X') ||
        (box3.textContent == 'X' && box6.textContent == 'X' && box9.textContent == 'X') ||
        (box1.textContent == 'X' && box5.textContent == 'X' && box9.textContent == 'X') ||
        (box3.textContent == 'X' && box5.textContent == 'X' && box7.textContent == 'X')) {
        progressTracker.textContent = "Congrats Player 1 Wins"
        gameEnd = true
        p1ScoreBox.textContent = ++p1ScoreTracker

    } else if ((box1.textContent == 'O' && box2.textContent == 'O' && box3.textContent == 'O') ||
        (box4.textContent == 'O' && box5.textContent == 'O' && box6.textContent == 'O') ||
        (box7.textContent == 'O' && box8.textContent == 'O' && box9.textContent == 'O') ||
        (box1.textContent == 'O' && box4.textContent == 'O' && box7.textContent == 'O') ||
        (box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == 'O') ||
        (box3.textContent == 'O' && box6.textContent == 'O' && box9.textContent == 'O') ||
        (box1.textContent == 'O' && box5.textContent == 'O' && box9.textContent == 'O') ||
        (box3.textContent == 'O' && box5.textContent == 'O' && box7.textContent == 'O')) {
        progressTracker.textContent = "Congrats Player 2 Wins"
        gameEnd = true
        p2ScoreBox.textContent = ++p2ScoreTracker
    }
}

parentBox.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
        if (event.target.textContent === 'X' || event.target.textContent === 'O') {
            return
        } else {
            if (gameEnd === true) {
                return
            }
            if (numOfTurns === 0) {
                event.target.textContent = 'X'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p2name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 1) {
                event.target.textContent = 'O'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p1name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 2) {
                event.target.textContent = 'X'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p2name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 3) {
                event.target.textContent = 'O'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p1name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 4) {
                event.target.textContent = 'X'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p2name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 5) {
                event.target.textContent = 'O'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p1name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 6) {
                event.target.textContent = 'X'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p2name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 7) {
                event.target.textContent = 'O'
                numOfTurns++
                progressTracker.textContent = "Turn " + numOfTurns + ", " + p1name.textContent + " Turn"
                checkWinningCondition()
            } else if (numOfTurns === 8) {
                event.target.textContent = 'X'
                numOfTurns++
                progressTracker.textContent = "DRAW"
                checkWinningCondition()
            }
        }
    }
}
)


function resetBoard() {
    numOfTurns = 0
    gameEnd = false
    progressTracker.textContent = "Game Start"
    for (i = 0; i < allBox.length; i++) {
        allBox[i].textContent = ''
    }
}
rstBtn.addEventListener('click', function () {
    resetBoard()
})
