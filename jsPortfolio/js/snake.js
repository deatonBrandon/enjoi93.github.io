"use strict";

document.addEventListener('DOMContentLoaded', () => {
const squares = document.querySelectorAll('.grid div');
const scoreDisplay = document.querySelector('.score_span');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.restart');

const width = 10;
let currentIndex = 0; // the first div in our grid
let appleIndex = 0; // the first div in the grid
let currentSnake = [2, 1, 0]; // the div in the grid being 2 (the head) and 0 being the end (the tail) and 1's being the body
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;


// to start and restart the game
function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);
    score = 0;
    randomApple()
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    interval = setInterval(moveOutcomes, intervalTime);
}

// function that deals with ALL outcomes of the Snake:
function moveOutcomes() {
    // deals with snake hitting borders or itself
    if (
        (currentSnake[0] + width >= (width * width) && direction == width) || // if snake hits the bottom
        (currentSnake[0] % width == width - 1 && direction == 1) || // if snake hits right wall
        (currentSnake[0] % width == 0 && direction == -1) || // if snake hits left wall
        (currentSnake[0] - width < 0 && direction == -width) ||// if snake hits the top
        squares[currentSnake[0] + direction].classList.contains('snake') // if the snake goes into itself
    ) {
        return clearInterval(interval); // this will clear the interval if any of the above happens
    }

    const tail = currentSnake.pop(); // removes last int of the array and shows it
    squares[tail].classList.remove('snake'); // removes class of 'snake' from the tail
    currentSnake.unshift(currentSnake[0] + direction); // gives direction to the head of snake


// deals with snake getting apple
if (squares[currentSnake[0]].classList.contains('apple')) {
    squares[currentSnake[0]].classList.remove('apple');
    squares[tail].classList.add('snake');
    currentSnake.push(tail);
    randomApple();
    score++;
    scoreDisplay.textContent = score;
    clearInterval(interval);
    intervalTime *= speed;
    interval = setInterval(moveOutcomes, intervalTime);
}
squares[currentSnake[0]].classList.add('snake');
}

// generate new apple once apple is eaten
function randomApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while(squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
}

// assigning functions to keycodes (up,down,left,right)
function control(e) {
    squares[currentIndex].classList.remove('snake');
// if user presses 'd' or right arrow
    if(e.keyCode == 68) {
        direction = 1;
// if user presses 'w' or up arrow
    } else if (e.keyCode == 87) {
        direction = -width;
// if user presses 'a' or left arrow
    } else if (e.keyCode == 65) {
        direction = -1;
// if user presses 's' or down arrow
    } else if (e.keyCode == 83) {
        direction = +width;
    }
}

document.addEventListener('keyup', control);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click',startGame);
})