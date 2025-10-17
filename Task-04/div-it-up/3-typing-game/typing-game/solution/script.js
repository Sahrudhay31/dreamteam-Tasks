const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const gameOverEl = document.getElementById("gameOver");

let score = 0;
let lives = 3;
let blocks = [];

// Generate random letter
function randomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
}

// Create new falling block
function createBlock() {
  const block = document.createElement("div");
  block.classList.add("block");
  block.textContent = randomLetter();
  block.style.left = Math.floor(Math.random() * 350) + "px"; // random X
  gameArea.appendChild(block);

  const blockObj = { el: block, top: 0, letter: block.textContent };
  blocks.push(blockObj);
}

// Move blocks down
function moveBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    block.top += 2; // falling speed
    block.el.style.top = block.top + "px";

    if (block.top > 470) {
      // Missed block
      gameArea.removeChild(block.el);
      blocks.splice(i, 1);
      lives--;
      livesEl.textContent = "Lives: " + lives;
      if (lives === 0) {
        gameOver();
      }
    }
  }
}

// Check if key pressed matches a block
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].letter === key) {
      // Correct catch
      gameArea.removeChild(blocks[i].el);
      blocks.splice(i, 1);
      score++;
      scoreEl.textContent = "Score: " + score;
      return;
    }
  }
});

// End game
function gameOver() {
  clearInterval(blockGenerator);
  clearInterval(blockMover);
  gameOverEl.style.display = "block";
}

// Game loop
const blockGenerator = setInterval(createBlock, 1500); // new block every 1.5 sec
const blockMover = setInterval(moveBlocks, 30); // move every frame
