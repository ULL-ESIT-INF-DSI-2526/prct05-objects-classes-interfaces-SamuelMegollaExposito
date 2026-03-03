/**
 * Representa un jugador en conecta4
 */
export class Player {
  constructor(private name: string, private symbol: string) {
    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.trim().length === 0) {
      throw new Error("Player name cannot be empty.");
    }
    if (!this.symbol || this.symbol.trim().length === 0) {
      throw new Error("Player symbol cannot be empty.");
    }
  }

  getName(): string {
    return this.name;
  }

  getSymbol(): string {
    return this.symbol;
  }
}