import { Animal } from "./animal";
import { Perro } from "./perro"
import { Gato } from "./gato"


/**
 * Clase que define un refugio para animales como perros y gatos
 * 
 * @param _plazasPerros - Plazas para los perros dentro del refugio
 * @param _plazasGato - Plazas para los gatos detnro del refugio
 * @function listadoPerros - Consultar el listado completo de perros 
 * @function listadoGatos - Consultar el listado completo de gatos
 */
export class Refugio{
	constructor(
	private _plazasPerros: Perro[] = [],
	private _plazasGato: Gato[] = [],
	){}

	get plazasPerros(){
		return this._plazasPerros;
	}

	get plazasGato(){
		return this._plazasGato;
	}

	listadoPerros(): void {
		console.log(`Listado de perros: ${this._plazasPerros}`);
	}

	listadoGatos(): void {
		console.log(`Listado de perros: ${this._plazasGato}`);
	}

	ingreso(): void {

	}


}
