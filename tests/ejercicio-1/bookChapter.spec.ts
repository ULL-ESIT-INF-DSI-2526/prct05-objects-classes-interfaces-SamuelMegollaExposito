import { describe , expect , test} from "vitest"
import { BookChapter } from "../../src/ejercicio-1/bookChapter";

describe("BookChapter", () => {

  test("should create a valid book chapter", () => {
    const chapter = new BookChapter(
      "Deep Learning",
      ["John Doe"],
      ["AI"],
      "Summary",
      new Date("2021-01-01"),
      "50-70",
      "Springer",
      "AI Handbook"
    );

    expect(chapter.getTitle()).toBe("Deep Learning");
  });

  test("should throw error if book title is empty", () => {
    expect(() => {
      new BookChapter(
        "Title",
        ["Author"],
        [],
        "",
        new Date(),
        "1-10",
        "Springer",
        ""
      );
    }).toThrow();
  });
});