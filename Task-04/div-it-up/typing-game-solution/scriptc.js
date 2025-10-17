const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// Game state
let words = [];
let wordIndex = 0;
let startTime = 0;
let inputHandler;

// Elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startButton = document.getElementById('start');

// Modal elements
const modal = document.getElementById('modal');
const finalTimeEl = document.getElementById('finalTime');
const highScoreEl = document.getElementById('highScore');
const closeModalBtn = document.getElementById('closeModal');

// High score functions
function getHighScore() {
  return localStorage.getItem("typingHighScore") || null;
}
function setHighScore(score) {
  localStorage.setItem("typingHighScore", score);
}

// Start button
startButton.addEventListener('click', () => {
  // Pick a random quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  // Split into words
  words = quote.split(' ');
  wordIndex = 0;

  // Reset UI
  const spanWords = words.map(word => `<span>${word} </span>`);
  quoteElement.innerHTML = spanWords.join('');
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';

  // Enable and focus textbox
  typedValueElement.value = '';
  typedValueElement.disabled = false;
  typedValueElement.focus();

  // Reset input listener
  typedValueElement.removeEventListener('input', inputHandler);
  inputHandler = handleInput;
  typedValueElement.addEventListener('input', inputHandler);

  // Start timer
  startTime = new Date().getTime();
});

// Input handler
function handleInput() {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // Finished!
    const elapsedTime = (new Date().getTime() - startTime) / 1000;

    // Disable input
    typedValueElement.disabled = true;
    typedValueElement.removeEventListener('input', inputHandler);

    // Check high score
    const highScore = getHighScore();
    if (!highScore || elapsedTime < highScore) {
      setHighScore(elapsedTime);
    }

    // Show modal
    finalTimeEl.textContent = `You finished in ${elapsedTime.toFixed(2)} seconds.`;
    highScoreEl.textContent = getHighScore();
    modal.style.display = 'flex';
  } 
  else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    wordIndex++;
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } 
  else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } 
  else {
    typedValueElement.className = 'error';
  }
}

// Modal close
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
