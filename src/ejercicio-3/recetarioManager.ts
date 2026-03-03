import { IChef } from "./IChef";

export class RecetarioManager {
  private _chefs: IChef[] = [];

  agregarChef(chef: IChef): void {
    this._chefs.push(chef);
  }

  buscarChef(nombre: string): IChef[] {
    return this._chefs.filter(c =>
      c.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  get chefs(): IChef[] {
    return [...this._chefs];
  }
}