import { describe, test, expect } from "vitest";
import { Paso } from "../../src/ejercicio-3/paso";
import { Receta } from "../../src/ejercicio-3/receta";

describe("Receta", () => {

  test("Número de pasos correcto", () => {
    const receta = new Receta("Sopa", 2024);
    receta.agregarPaso(new Paso("Cortar", 60, [], false));
    receta.agregarPaso(new Paso("Mezclar", 30, [], true));

    expect(receta.numeroPasos()).toBe(2);
  });

  test("Tiempo mínimo y máximo correcto", () => {
    const receta = new Receta("Sopa", 2024);
    receta.agregarPaso(new Paso("Cortar", 60, [], false));
    receta.agregarPaso(new Paso("Mezclar", 30, [], true));

    const tiempo = receta.calcularTiempoTotal();

    expect(tiempo.tiempoMin).toBe(60);
    expect(tiempo.tiempoMax).toBe(90);
  });

});