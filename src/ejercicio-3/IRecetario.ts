import { IReceta } from "./IReceta";
import { IPaso } from "./IPaso";

export interface IRecetario {
  readonly recetas: IReceta[];

  agregarReceta(receta: IReceta): void;
  buscarReceta(nombre: string): IReceta[];
  buscarPaso(nombre: string): IPaso[];
}