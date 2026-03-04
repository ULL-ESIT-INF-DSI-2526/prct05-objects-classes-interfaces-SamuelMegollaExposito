import { describe , expect , test} from "vitest"
import { Gato } from "../../src/modificacion/gato"

describe("Pruebas unitarias de perro", () => {

  test("Debería crear un perro valido", () => {
    const gato = new Gato(
        "4122AUII",
        "Arañita",
        6,
        5,
        "Bueno",
        "Marron",
        true
    );

    expect(gato.obtenerFicha()).toBe("Nombre: Arañita, Microchip: 4122AUII, Edad: 6, Peso: 5, Estado de salud: Bueno, Pelaje: Marron, ¿Es interior?: true")
  });

  test("Debería lanzar un error si no hay Chip", () => {
    expect(() =>{
        new Gato(
        "",
        "Arañita",
        6,
        5,
        "Bueno",
        "Marron",
        true
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay nombre", () => {
    expect(() =>{
        new Gato(
            "4122AUII",
            "",
            6,
            5,
            "Bueno",
            "Marron",
            true
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay Estado de salud", () => {
    expect(() =>{
        new Gato(
            "4122AUII",
            "Arañita",
            6,
            5,
            "",
            "Marron",
            true
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay pelaje", () => {
    expect(() =>{
            new Gato(
            "4122AUII",
            "Arañita",
            6,
            5,
            "Bueno",
            "",
            true
        );
    }).toThrow();

  });
});