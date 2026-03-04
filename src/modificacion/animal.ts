import { IAnimal } from "./IAnimal";

/**
 * Clase que Animal que implementa la interfaz IAnimal
 */
export abstract class Animal implements IAnimal {
  constructor(
    private _microchip: string,
    private _nombre: string,
    private _edad: number,
    private _peso: number,
    private _estadoSalud: string
  ) {
    if(!_microchip || _microchip.trim().length === 0){
        throw new Error("El microchip no puede estar vacío");
    }
    if(!_nombre || _nombre.trim().length === 0){
        throw new Error("El Nombre no puede estar vacío");
    }
    if(!_edad){
        throw new Error("La edad no puede estar vacío");
    }
    if(!_peso){
        throw new Error("El peso no puede estar vacío");
    }
    if(!_estadoSalud || _estadoSalud.trim().length === 0){
        throw new Error("El Estado de salud no puede estar vacío");
    }
  }

/** 
 * Getter de microchip
*/
  get microchip(): string {
    return this._microchip;
  }

/** 
 * Setter de microchip
*/
  set microchip(value: string) {
    this._microchip = value;
  }

/** 
 * Getter de nombre
*/
  get nombre(): string {
    return this._nombre;
  }

/** 
 * Setter de microchip
*/
  set nombre(value: string) {
    this._nombre = value;
  }

/** 
 * Getter de edad
*/
  get edad(): number {
    return this._edad;
  }

/** 
 * Setter de microchip
*/
  set edad(value: number) {
    this._edad = value;
  }

/** 
 * Getter de peso
*/
  get peso(): number {
    return this._peso;
  }

/** 
 * Setter de microchip
*/
  set peso(value: number) {
    this._peso = value;
  }

/** 
 * Getter de estadoSalud
*/
  get estadoSalud(): string {
    return this._estadoSalud;
  }

/** 
 * Setter de estadoSalud
*/
  set estadoSalud(value: string) {
    this._estadoSalud = value;
  }

  abstract obtenerFicha(): string;
}