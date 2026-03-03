import { describe, test, expect, beforeEach } from "vitest";
import { Connect4 } from "../../src/ejercicio-2/connect4";
import { Player } from "../../src/ejercicio-2/player";

describe("Connect4 Game", () => {
  let p1: Player, p2: Player, game: Connect4;

  beforeEach(() => {
    p1 = new Player("Alice", "X");
    p2 = new Player("Bob", "O");
    game = new Connect4(p1, p2);
  });

  test("should initialize with current player as player1", () => {
    expect(game.getCurrentPlayer()).toBe(p1);
  });

  test("should alternate turns after a valid play", () => {
    game.play(0);
    expect(game.getCurrentPlayer()).toBe(p2);
    game.play(1);
    expect(game.getCurrentPlayer()).toBe(p1);
  });

  test("should not allow play in full column", () => {
    for (let i = 0; i < 6; i++) game.play(0);
    expect(game.play(0)).toBe(false);
  });

  test("should detect horizontal win", () => {
    game.play(0); // X
    game.play(0); // O
    game.play(1); // X
    game.play(1); // O
    game.play(2); // X
    game.play(2); // O
    game.play(3); // X -> gana

    expect(game.isGameOver()).toBe(true);
    expect(game.getWinner()).toBe("X");
  });

  test("should detect vertical win", () => {
    game.play(0); // X
    game.play(1); // O
    game.play(0); // X
    game.play(1); // O
    game.play(0); // X
    game.play(1); // O
    game.play(0); // X -> gana

    expect(game.isGameOver()).toBe(true);
    expect(game.getWinner()).toBe("X");
  });

  test("should detect diagonal ↘ win", () => {
    /*
      Construcción de diagonal ↘ para X
      Usamos play() alternando turnos
    */
    game.play(0); // X
    game.play(1); // O
    game.play(1); // X
    game.play(2); // O
    game.play(2); // X
    game.play(3); // O
    game.play(2); // X
    game.play(3); // O
    game.play(3); // X
    game.play(0); // O
    game.play(3); // X -> gana

    expect(game.isGameOver()).toBe(true);
    expect(game.getWinner()).toBe("X");
  });

  test("should detect diagonal ↙ win", () => {
    /*
      Construcción de diagonal ↙ para X
    */
    game.play(3); // X
    game.play(2); // O
    game.play(2); // X
    game.play(1); // O
    game.play(1); // X
    game.play(0); // O
    game.play(1); // X
    game.play(0); // O
    game.play(0); // X
    game.play(4); // O
    game.play(0); // X -> gana

    expect(game.isGameOver()).toBe(true);
    expect(game.getWinner()).toBe("X");
  });

  test("should throw error if playing after game over", () => {
    game.play(0); game.play(0);
    game.play(1); game.play(1);
    game.play(2); game.play(2);
    game.play(3); // X gana

    expect(() => game.play(4)).toThrow("Se termino el juego");
  });

  test("should throw error if initializing with same symbols", () => {
    const p3 = new Player("Charlie", "X");
    expect(() => new Connect4(p1, p3)).toThrow();
  });

});