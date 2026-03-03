import { IChef } from "./IChef";
import { IRecetario } from "./IRecetario";

export class Chef implements IChef {

  constructor(
    private _nombre: string,
    private _seguidores: number,
    private _recetario: IRecetario
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get seguidores(): number {
    return this._seguidores;
  }

  get recetario(): IRecetario {
    return this._recetario;
  }
}