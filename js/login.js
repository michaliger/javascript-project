const input = document.querySelector('#playerName');
const start = document.querySelector('#startGame');
const instructions = document.querySelector('#Gameinstructions');

// One click handler: save the name, then open the game with the chosen level
start.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.nameuser = input.value;
  const difficulty = document.getElementById('difficulty').value;
  window.location.href = `./html/game.html?difficulty=${difficulty}`;
});

instructions.addEventListener('click', () => {
  const theInstructions = document.querySelector('#instructions');
  theInstructions.style.display = theInstructions.style.display === 'none' ? 'block' : 'none';
});
