import { describe, test, expect } from "vitest"
import { Player } from "../../src/ejercicio-2/player";

describe("Player", () => {
  test("should create player with valid name and symbol", () => {
    const p = new Player("Alice", "X");
    expect(p.getName()).toBe("Alice");
    expect(p.getSymbol()).toBe("X");
  });

  test("should throw error if name is empty", () => {
    expect(() => new Player("", "X")).toThrow();
  });

  test("should throw error if symbol is empty", () => {
    expect(() => new Player("Alice", "")).toThrow();
  });
});