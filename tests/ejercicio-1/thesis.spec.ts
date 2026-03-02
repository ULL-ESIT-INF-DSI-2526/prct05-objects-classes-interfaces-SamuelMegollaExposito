import { describe , expect , test} from "vitest"
import { TFG } from "../../src/ejercicio-1/tfg";
import { TFM } from "../../src/ejercicio-1/tfm";

describe("Thesis", () => {

  test("should create valid TFG", () => {
    const tfg = new TFG(
      "AI System",
      ["Student"],
      ["AI"],
      "Summary",
      new Date("2023-01-01"),
      "1-50",
      "University Press",
      "ULL"
    );

    expect(tfg.toIEEE()).toContain("Bachelor's Thesis");
  });

  test("should create valid TFM", () => {
    const tfm = new TFM(
      "Advanced AI",
      ["Student"],
      ["AI"],
      "Summary",
      new Date("2024-01-01"),
      "1-80",
      "University Press",
      "ULL"
    );

    expect(tfm.toIEEE()).toContain("Master's Thesis");
  });

  test("should throw error if university is empty", () => {
    expect(() => {
      new TFG(
        "Title",
        ["Student"],
        [],
        "",
        new Date(),
        "1-10",
        "Press",
        ""
      );
    }).toThrow();
  });
});