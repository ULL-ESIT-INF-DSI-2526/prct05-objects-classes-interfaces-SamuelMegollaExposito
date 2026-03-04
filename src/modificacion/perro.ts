import { Animal } from "./animal";
import { IAnimal } from "./IAnimal";
//import { IPerro } from "./IPerro";

/**
 * Clase perro que implementa la interfaz Iperro
 */
export class Perro extends Animal {

  constructor(
    microchip: string,
    nombre: string,
    edad: number,
    peso: number,
    estadoSalud: string,
    private _raza: string,
    private _nivelActividad: string
  ){
    super(microchip,nombre,edad,peso,estadoSalud)
    
    if(!_raza || _raza.trim().length === 0){
      throw new Error("La raza no puede estar vacío");
    }
    if(!_nivelActividad || _nivelActividad.trim().length === 0){
      throw new Error("El nivel de actividad no puede estar vacío");
    }
  }

/** 
 * Getter de raza
*/
  get raza(): string {
    return this._raza;
  }

/** 
 * Setter de raza
*/
  set raza(value: string){
    this._raza = value;
  }

/** 
 * Getter de nivelActividad
*/
  get nivelActividad(): string{
    return this._nivelActividad;
  }

/** 
 * Setter de NivelActividad
*/
  set nivelActividad(value: string){
    this._nivelActividad = value;
  }
  
  obtenerFicha(): string {
    let result: string =`Nombre: ${this.nombre}, Microchip: ${this.microchip}, Edad: ${this.edad}, Peso: ${this.peso}, Estado de salud: ${this.estadoSalud}, Raza: ${this.raza}, Nivel de Actividad: ${this.nivelActividad}`;
    return result;
  }
}
