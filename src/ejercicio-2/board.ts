/**
 * Represents the Connect 4 board.
 */
export class Board {
  private rows = 6;
  private columns = 7;
  private board: string[][];

  constructor() {
    this.board = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill("")
    );
    this.validate();
  }

  private validate(): void {
    if (this.rows <= 0 || this.columns <= 0) {
      throw new Error("El tablero debe tener tamaño positivo.");
    }
  }
  /**
   * Returns a copy of the board.
   */
  getBoard(): string[][] {
    return this.board.map(row => [...row]);
  }

  /**
   * Checks if a column is full.
   */
  isColumnFull(column: number): boolean {
    return this.board[0][column] !== "";
  }

  /**
   * Inserts a piece into a column.
   * Returns true if successful, false if column is full.
   */
  insertPiece(column: number, symbol: string): boolean {
    if (column < 0 || column >= this.columns) {
      throw new Error("Column out of bounds");
    }

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][column] === "") {
        this.board[row][column] = symbol;
        return true;
      }
    }
    return false; // columna llena
  }

  /**
   * Checks for a winner (4 in a row).
   * Returns symbol of winner, or null if none.
   */
  checkWinner(): string | null {
    const directions = [
      { dr: 0, dc: 1 },   // horizontal
      { dr: 1, dc: 0 },   // vertical
      { dr: 1, dc: 1 },   // diagonal ↘
      { dr: 1, dc: -1 }   // diagonal ↙
    ];

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        const symbol = this.board[r][c];
        if (symbol === "") continue;

        for (let { dr, dc } of directions) {
          let count = 1;
          let nr = r + dr;
          let nc = c + dc;

          while (
            nr >= 0 &&
            nr < this.rows &&
            nc >= 0 &&
            nc < this.columns &&
            this.board[nr][nc] === symbol
          ) {
            count++;
            if (count === 4) return symbol;
            nr += dr;
            nc += dc;
          }
        }
      }
    }
    return null;
  }
}