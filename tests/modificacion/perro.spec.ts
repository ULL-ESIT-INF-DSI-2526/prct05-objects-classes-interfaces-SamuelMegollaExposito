import { describe , expect , test} from "vitest"
import { Perro } from "../../src/modificacion/perro"


describe("Pruebas unitarias de perro", () => {

  test("Debería crear un perro valido", () => {
    const pero = new Perro(
        "1326813AAU",
        "Copito",
        4,
        10,
        "Muy bueno",
        "Pastor Belga",
        "Activo"
    );

    expect(pero.obtenerFicha()).toBe("Nombre: Copito, Microchip: 1326813AAU, Edad: 4, Peso: 10, Estado de salud: Muy bueno, Raza: Pastor Belga, Nivel de Actividad: Activo")
  });

  test("Debería lanzar un error si no hay Chip", () => {
    expect(() =>{
        new Perro(
            "",
            "Copito",
            4,
            10,
            "Muy bueno",
            "Pastor Belga",
            "Activo"
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay nombre", () => {
    expect(() =>{
        new Perro(
            "1326813AAU",
            "",
            4,
            10,
            "Muy bueno",
            "Pastor Belga",
            "Activo"
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay Estado de salud", () => {
    expect(() =>{
        new Perro(
            "1326813AAU",
            "Copito",
            4,
            10,
            "",
            "Pastor Belga",
            "Activo"
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no hay raza", () => {
    expect(() =>{
        new Perro(
            "1326813AAU",
            "Copito",
            4,
            10,
            "Muy bueno",
            "",
            "Activo"
        );
    }).toThrow();

  });

  test("Debería lanzar un error si no Actividad", () => {
    expect(() =>{
        new Perro(
            "1326813AAU",
            "Copito",
            4,
            10,
            "Muy bueno",
            "Pastor Belga",
            ""
        );
    }).toThrow();

  });
});