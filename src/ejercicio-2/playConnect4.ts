import * as readlineSync from "readline-sync";
import chalk from "chalk";
import { Connect4 } from "./connect4";
import { Player } from "./player";

// Crear jugadores
const player1 = new Player("Jugador 1", "X");
const player2 = new Player("Jugador 2", "O");

// Crear juego
const game = new Connect4(player1, player2);

/**
 * Función para imprimir tablero estilo consola
 * @param board - Tablero de juego
 * 
*/
function printBoard(board: string[][]) {
  console.log("\n  0 1 2 3 4 5 6"); // índices de columna
  for (let r = 0; r < board.length; r++) {
    let rowStr = `${r} `; // índice fila
    for (let c = 0; c < board[r].length; c++) {
      const cell = board[r][c];
      if (cell === "X") rowStr += chalk.red("● ");
      else if (cell === "O") rowStr += chalk.yellow("● ");
      else rowStr += chalk.gray("· ");
    }
    console.log(rowStr);
  }
  console.log("");
}

// Función principal de juego
function startGame() {
  console.log(chalk.blue("¡Bienvenido a Connect 4!"));

  while (!game.isGameOver()) {
    printBoard(game.getBoard());
    const currentPlayer = game.getCurrentPlayer();

    const playerColor = currentPlayer.getSymbol() === "X" ? chalk.red : chalk.yellow;
    console.log(`Turno de ${playerColor(currentPlayer.getName())} (${currentPlayer.getSymbol()})`);

    // Pedir columna
    let col: number;
    while (true) {
      const input = readlineSync.question("Elige columna (0-6): ");
      col = parseInt(input);
      if (!isNaN(col) && col >= 0 && col <= 6) {
        const valid = game.play(col);
        if (valid) break;
        console.log(chalk.red("Columna llena, elige otra."));
      } else {
        console.log(chalk.red("Entrada inválida. Ingresa un número entre 0 y 6."));
      }
    }
  }

  printBoard(game.getBoard());
  const winner = game.getWinner();
  if (winner) {
    const winnerPlayer = winner === "X" ? player1 : player2;
    const colorWinner = winner === "X" ? chalk.red : chalk.yellow;

    console.log(chalk.green(`¡Felicidades! Ganó ${colorWinner(winnerPlayer.getName())} (${winner}) 🎉`));
  } else {
    console.log(chalk.cyan("¡Empate! No hay ganador."));
  }
}

// Iniciar el juego
startGame();