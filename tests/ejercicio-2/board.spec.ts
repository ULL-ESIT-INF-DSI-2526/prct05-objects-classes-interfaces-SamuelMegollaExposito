import { describe, test, expect } from "vitest";
import { Board } from "../../src/ejercicio-2/board";

describe("Board", () => {

  test("should initialize empty 6x7 board", () => {
    const board = new Board();
    const b = board.getBoard();
    expect(b.length).toBe(6);
    expect(b[0].length).toBe(7);
    expect(b.every(row => row.every(cell => cell === ""))).toBe(true);
  });

  test("should insert piece in column", () => {
    const board = new Board();
    expect(board.insertPiece(0, "X")).toBe(true);
    expect(board.getBoard()[5][0]).toBe("X"); // cae al fondo
  });

  test("should fill column and detect full", () => {
    const board = new Board();
    for (let i = 0; i < 6; i++) {
      board.insertPiece(0, "O");
    }
    expect(board.isColumnFull(0)).toBe(true);
    expect(board.insertPiece(0, "X")).toBe(false);
  });

  test("should detect horizontal winner", () => {
    const board = new Board();
    board.insertPiece(0, "X");
    board.insertPiece(1, "X");
    board.insertPiece(2, "X");
    board.insertPiece(3, "X");
    expect(board.checkWinner()).toBe("X");
  });

  test("should detect vertical winner", () => {
    const board = new Board();
    for (let i = 0; i < 4; i++) {
      board.insertPiece(0, "O");
    }
    expect(board.checkWinner()).toBe("O");
  });

  test("should handle a diagonal win ↘", () => {
    const board = new Board();

    // Construimos diagonal ↘ para X
    board.insertPiece(0, "X"); // fila 5,0
    board.insertPiece(1, "O"); // relleno
    board.insertPiece(1, "X"); // fila 4,1
    board.insertPiece(2, "O"); // relleno
    board.insertPiece(2, "O"); // relleno
    board.insertPiece(2, "X"); // fila 3,2
    board.insertPiece(3, "O"); // relleno
    board.insertPiece(3, "O"); // relleno
    board.insertPiece(3, "O"); // relleno
    board.insertPiece(3, "X"); // fila 2,3 -> gana X

    expect(board.checkWinner()).toBe("X");
  });

  test("should handle a diagonal win ↙", () => {
    const board = new Board();

    // Construimos diagonal ↙ para X
    board.insertPiece(3, "X"); // fila 5,3
    board.insertPiece(2, "O"); // relleno
    board.insertPiece(2, "X"); // fila 4,2
    board.insertPiece(1, "O"); // relleno
    board.insertPiece(1, "X"); // fila 4,1
    board.insertPiece(0, "O"); // relleno
    board.insertPiece(1, "X"); // fila 3,1
    board.insertPiece(0, "O"); // relleno
    board.insertPiece(0, "X"); // fila 3,0
    board.insertPiece(0, "X"); // fila 2,0 -> gana X

    expect(board.checkWinner()).toBe("X");
  });

  test("should return null if no winner", () => {
    const board = new Board();
    expect(board.checkWinner()).toBe(null);
  });

});