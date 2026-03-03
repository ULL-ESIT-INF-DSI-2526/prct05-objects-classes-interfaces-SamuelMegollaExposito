import { IReceta } from "./IReceta";
import { IPaso } from "./IPaso";

export class Receta implements IReceta {
  private _pasos: IPaso[] = [];

  constructor(
    private _nombre: string,
    private _anioPublicacion: number
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get anioPublicacion(): number {
    return this._anioPublicacion;
  }

  get pasos(): IPaso[] {
    return [...this._pasos];
  }

  agregarPaso(paso: IPaso): void {
    this._pasos.push(paso);
  }

  numeroPasos(): number {
    return this._pasos.length;
  }

  calcularTiempoTotal(): { tiempoMin: number; tiempoMax: number } {
    let tiempoMin = 0;
    let tiempoMax = 0;

    this._pasos.forEach(paso => {
      if (paso.opcional) {
        tiempoMax += paso.duracionSegundos;
      } else {
        tiempoMin += paso.duracionSegundos;
        tiempoMax += paso.duracionSegundos;
      }
    });

    return { tiempoMin, tiempoMax };
  }

  validate(): void {
    if(!this.nombre || this.nombre.trim.length === 0){
      throw new Error("El nombre no puede estar vacío")
    }

    if(!this.anioPublicacion){
      throw new Error("El año de publicación no puede estar vacío")
    }

    if(!this.pasos || this.nombre.trim.length === 0){
      throw new Error("Los pasos no pueden estar vacíos")
    }
  }
}