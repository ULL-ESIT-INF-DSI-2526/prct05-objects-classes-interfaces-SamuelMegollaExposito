import { IRecetario } from "./IRecetario";
import { IReceta } from "./IReceta";
import { IPaso } from "./IPaso";

export class Recetario implements IRecetario {
  private _recetas: IReceta[] = [];

  get recetas(): IReceta[] {
    return [...this._recetas];
  }

  agregarReceta(receta: IReceta): void {
    this._recetas.push(receta);
  }

  buscarReceta(nombre: string): IReceta[] {
    return this._recetas.filter(r =>
      r.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  buscarPaso(nombre: string): IPaso[] {
    const resultados: IPaso[] = [];

    this._recetas.forEach(receta => {
      receta.pasos.forEach(paso => {
        if (paso.nombre.toLowerCase().includes(nombre.toLowerCase())) {
          resultados.push(paso);
        }
      });
    });

    return resultados;
  }
}