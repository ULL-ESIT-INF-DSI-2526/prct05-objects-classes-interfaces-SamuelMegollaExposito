import { describe , expect , test} from "vitest"
import { JournalArticle } from "../../src/ejercicio-1/journalArticle.ts";

describe("JournalArticle", () => {

  const validArticle = () => new JournalArticle(
    "AI Research",
    ["John Doe"],
    ["AI", "ML"],
    "Research summary",
    new Date("2023-01-01"),
    "10-20",
    "IEEE Journal",
    5,
    2
  );

  test("should create a valid journal article", () => {
    const article = validArticle();
    expect(article.getTitle()).toBe("AI Research");
  });

  test("should generate correct IEEE format", () => {
    const article = validArticle();
    const ieee = article.toIEEE();

    expect(ieee).toContain("vol. 5");
    expect(ieee).toContain("no. 2");
    expect(ieee).toContain("2023");
  });

  test("should throw error if title is empty", () => {
    expect(() => {
      new JournalArticle(
        "",
        ["John Doe"],
        [],
        "",
        new Date(),
        "1-10",
        "Journal",
        1,
        1
      );
    }).toThrow();
  });

  test("should throw error if no authors", () => {
    expect(() => {
      new JournalArticle(
        "Title",
        [],
        [],
        "",
        new Date(),
        "1-10",
        "Journal",
        1,
        1
      );
    }).toThrow();
  });

  test("should throw error if volume <= 0", () => {
    expect(() => {
      new JournalArticle(
        "Title",
        ["Author"],
        [],
        "",
        new Date(),
        "1-10",
        "Journal",
        0,
        1
      );
    }).toThrow();
  });

  test("should throw error if issue <= 0", () => {
    expect(() => {
      new JournalArticle(
        "Title",
        ["Author"],
        [],
        "",
        new Date(),
        "1-10",
        "Journal",
        1,
        0
      );
    }).toThrow();
  });
});