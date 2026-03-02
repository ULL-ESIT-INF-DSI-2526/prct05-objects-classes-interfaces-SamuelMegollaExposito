import { describe , expect , test} from "vitest"
import { ConferencePaper } from "../../src/ejercicio-1/conferencePaper";

describe("ConferencePaper", () => {

  const validPaper = () => new ConferencePaper(
    "Conference AI",
    ["Jane Doe"],
    ["AI"],
    "Summary",
    new Date("2022-06-01"),
    "100-110",
    "IEEE",
    "ICAI 2022",
    "Madrid"
  );

  test("should create a valid conference paper", () => {
    const paper = validPaper();
    expect(paper.getTitle()).toBe("Conference AI");
  });

  test("should generate correct IEEE format", () => {
    const ieee = validPaper().toIEEE();
    expect(ieee).toContain("Proc.");
    expect(ieee).toContain("Madrid");
  });

  test("should throw error if conference name is empty", () => {
    expect(() => {
      new ConferencePaper(
        "Title",
        ["Author"],
        [],
        "",
        new Date(),
        "1-10",
        "IEEE",
        "",
        "Madrid"
      );
    }).toThrow();
  });

  test("should throw error if location is empty", () => {
    expect(() => {
      new ConferencePaper(
        "Title",
        ["Author"],
        [],
        "",
        new Date(),
        "1-10",
        "IEEE",
        "ICAI",
        ""
      );
    }).toThrow();
  });
});