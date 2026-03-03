import { IRecetario } from "./IRecetario";

export interface IChef {
  readonly nombre: string;
  readonly seguidores: number;
  readonly recetario: IRecetario;
}