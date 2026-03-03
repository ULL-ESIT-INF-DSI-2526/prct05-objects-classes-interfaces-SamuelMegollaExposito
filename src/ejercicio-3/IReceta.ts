import { IPaso } from "./IPaso";

export interface IReceta {
  readonly nombre: string;
  readonly anioPublicacion: number;
  readonly pasos: IPaso[];

  validate(): void;
  agregarPaso(paso: IPaso): void;
  numeroPasos(): number;
  calcularTiempoTotal(): { tiempoMin: number; tiempoMax: number };
}