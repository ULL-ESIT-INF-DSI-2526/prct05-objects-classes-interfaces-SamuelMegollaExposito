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

  validate(): void {
    if(!this.nombre || this.nombre.trim.length === 0){
      throw new Error("El nombre no puede estar vacío")
    }
    if(!this.seguidores){
      throw new Error("Los seguidores no pueden estar vacíos")
    }
    if(!this.recetario){
      throw new Error("El recetario no puede estar vacío")
    }
  }
}