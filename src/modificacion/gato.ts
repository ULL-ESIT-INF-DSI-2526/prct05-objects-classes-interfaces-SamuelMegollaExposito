import { Animal } from "./animal";
import { IAnimal } from "./IAnimal";



/**
 * Clase gato que implementa la interfaz IGato
 */
export class Gato extends Animal{

  constructor(
    microchip: string,
    nombre: string,
    edad: number,
    peso: number,
    estadoSalud: string,
		private _pelaje: string,
		private _interior: boolean
  ) {
    super(microchip,nombre,edad,peso,estadoSalud)
    if(!_pelaje || _pelaje.trim().length === 0){
      throw new Error("El pelaje no puede estar vacío");
    }
    if(!_interior){
      throw new Error("El interior no puede estar vacío");
    }
	}

/** 
 * Getter de pelaje
*/
	get pelaje(): string{
		return this._pelaje;
	}

/** 
 * Setter de pelaje
*/
	set pelaje(value: string){
		this._pelaje = value;
	}

/** 
 * Getter de interior
*/
	get interior(): boolean{
		return this._interior;
	}

/** 
 * Setter de interior
*/
	set interior(value: boolean){
		this._interior = value;
	}

  obtenerFicha(): string {
    let result: string =`Nombre: ${this.nombre}, Microchip: ${this.microchip}, Edad: ${this.edad}, Peso: ${this.peso}, Estado de salud: ${this.estadoSalud}, Pelaje: ${this.pelaje}, ¿Es interior?: ${this.interior}`;
    return result;
  }

}