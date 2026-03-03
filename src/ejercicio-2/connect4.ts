// src/ejercicio-2/connect4.ts

import { Player } from "./player";
import { Board } from "./board";

/**
 * Representa el juego de conecta 4.
 */
export class Connect4 {
  private players: Player[];
  private board: Board;
  private currentPlayerIndex = 0;
  private gameOver = false;

  constructor(player1: Player, player2: Player) {
    this.players = [player1, player2];
    this.board = new Board();
    this.validate();
  }

  private validate(): void {
    if (!this.players[0] || !this.players[1]) {
      throw new Error("Dos jugadores son requeridos");
    }
    if (this.players[0].getSymbol() === this.players[1].getSymbol()) {
      throw new Error("Los dos jugadores no pueden tener el mismo símbolo");
    }
  }

  /**
   * Returns the current player.
   */
  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  /**
   * Returns a copy of the board.
   */
  getBoard(): string[][] {
    return this.board.getBoard();
  }

  /**
   * Inserts a piece for the current player in the given column.
   * Returns true if successful, false if column is full.
   */
  play(column: number): boolean {
    if (this.gameOver) {
      throw new Error("Se termino el juego");
    }

    const player = this.getCurrentPlayer();
    const success = this.board.insertPiece(column, player.getSymbol());

    if (!success) return false;

    // Check winner
    const winner = this.board.checkWinner();
    if (winner) {
      this.gameOver = true;
    } else {
      // Switch turn
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }

    return true;
  }

  /**
   * Returns the symbol of the winner, or null if no winner yet.
   */
  getWinner(): string | null {
    return this.board.checkWinner();
  }

  /**
   * Checks if the game has ended.
   */
  isGameOver(): boolean {
    return this.gameOver;
  }
}