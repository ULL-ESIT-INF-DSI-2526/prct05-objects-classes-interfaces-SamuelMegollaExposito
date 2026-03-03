import { Connect4 } from "./connect4.js";
import { Player } from "./player.js";

const player1 = new Player("Jugador 1", "X");
const player2 = new Player("Jugador 2", "O");

let game = new Connect4(player1, player2);

const boardDiv = document.getElementById("board")!;
const statusDiv = document.getElementById("status")!;
const resetBtn = document.getElementById("reset")!;

function render() {
  boardDiv.innerHTML = "";

  const board = game.getBoard();

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (cell === "X") div.classList.add("red");
      if (cell === "O") div.classList.add("yellow");

      div.addEventListener("click", () => {
        game.play(c);
        update();
      });

      boardDiv.appendChild(div);
    });
  });
}

function update() {
  render();

  const winner = game.getWinner();
  if (winner) {
    statusDiv.textContent = "Ganó " + winner;
  } else {
    statusDiv.textContent =
      "Turno de " + game.getCurrentPlayer().getName();
  }
}

resetBtn.addEventListener("click", () => {
  game = new Connect4(player1, player2);
  update();
});

update();