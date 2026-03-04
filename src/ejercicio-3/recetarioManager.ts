import { IChef } from "./IChef";
import { IRecetario } from "./IRecetario";
import { IReceta } from "./IReceta";
import { IPaso } from "./IPaso";

type FilaTabla = {
  chef: IChef["nombre"];
  seguidores: IChef["seguidores"];
  receta: IReceta["nombre"];
  anio: IReceta["anioPublicacion"];
  paso: IPaso["nombre"];
  duracion: IPaso["duracionSegundos"];
  opcional: IPaso["opcional"];
  vecesCompletado: IPaso["vecesCompletado"];
};

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

  mostrarTodo(): void {
    const tabla: FilaTabla[] = [];

    this._chefs.forEach(chef => {
      chef.recetario.recetas.forEach(receta => {
        receta.pasos.forEach(paso => {
          tabla.push({
            chef: chef.nombre,
            seguidores: chef.seguidores,
            receta: receta.nombre,
            anio: receta.anioPublicacion,
            paso: paso.nombre,
            duracion: paso.duracionSegundos,
            opcional: paso.opcional,
            vecesCompletado: paso.vecesCompletado
          });
        });
      });
    });

    console.table(tabla);
  }
}