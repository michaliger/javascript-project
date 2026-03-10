const input = document.querySelector('#playerName');
const start = document.querySelector('#startGame');
const instructions = document.querySelector('#Gameinstructions')
start.addEventListener('click', (e) => {
     e.preventDefault();
    const name = input.value;
    localStorage.nameuser = name;
    window.location.href = './html/game.html';
});
instructions.addEventListener('click' ,()=>{
    const Theinstructions = document.querySelector('#instructions')
    Theinstructions.style.display = Theinstructions.style.display === "none" ? "block" : "none";
});
document.getElementById("startGame").addEventListener("click", () => {
  const difficulty = document.getElementById("difficulty").value;
  window.location.href = `html/game.html?difficulty=${difficulty}`;
});