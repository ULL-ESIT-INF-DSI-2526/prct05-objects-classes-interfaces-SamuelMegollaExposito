/**
 * Interfaz que representa un animal
 * 
 * @param microchip - Microchip del animal
 * @param nombre - Nombre del animal
 * @param edad - Edad del animal
 * @param peso - Peso del animal
 * @param estadoSalud - Estado de salud del animal
 * @function obtenerFicha - Obtiene todos los datos de un animal
 */
export interface IAnimal {
  microchip: string;
  nombre: string;
  edad: number;
  peso: number;
  estadoSalud: string;

  obtenerFicha(): string;
}