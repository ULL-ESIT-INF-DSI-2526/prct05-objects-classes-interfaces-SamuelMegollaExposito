import { IPaso } from "./IPaso";

export class Paso implements IPaso {
  private _vecesCompletado = 0;

  constructor(
    private _nombre: string,
    private _duracionSegundos: number,
    private _etiquetas: string[],
    private _opcional: boolean
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get duracionSegundos(): number {
    return this._duracionSegundos;
  }

  get etiquetas(): string[] {
    return [...this._etiquetas];
  }

  get opcional(): boolean {
    return this._opcional;
  }

  get vecesCompletado(): number {
    return this._vecesCompletado;
  }

  completarPaso(): void {
    this._vecesCompletado++;
  }
}