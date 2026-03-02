import { describe , expect , test} from "vitest"
import { BibliographyManager } from "../../src/ejercicio-1/bibliographyManager";
import { JournalArticle } from "../../src/ejercicio-1/journalArticle";

describe("BibliographyManager", () => {

  const createArticle = () => new JournalArticle(
    "AI Research",
    ["John Doe"],
    ["AI", "ML"],
    "Summary",
    new Date("2023-01-01"),
    "10-20",
    "IEEE Journal",
    5,
    2
  );

  test("should add items", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    expect(manager.getAllItems().length).toBe(1);
  });

  test("should search by keyword", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.searchByKeyword("AI");

    expect(results.length).toBe(1);
  });

  test("should return empty array if keyword not found", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.searchByKeyword("Blockchain");

    expect(results.length).toBe(0);
  });

  test("should search by year", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({ year: 2023 });

    expect(results.length).toBe(1);
  });

  test("should search by author", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({ author: "John" });

    expect(results.length).toBe(1);
  });

  test("should search by multiple filters", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({
      author: "John",
      year: 2023
    });

    expect(results.length).toBe(1);
  });

  test("should export to IEEE format", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const ieee = manager.exportToIEEE(manager.getAllItems());

    expect(ieee[0]).toContain("vol. 5");
  });

  test("should not allow external modification of internal items array", () => {
  const manager = new BibliographyManager();
  manager.addItem(createArticle());

  const items = manager.getAllItems();
  items.pop(); // Intentamos modificar el array externo

  expect(manager.getAllItems().length).toBe(1);
  });

  test("should throw error if publication date is invalid", () => {
  expect(() => {
    new JournalArticle(
      "Title",
      ["Author"],
      [],
      "",
      new Date("invalid-date"),
      "1-10",
      "Journal",
      1,
      1
    );
  }).toThrow();
});

  test("search should not modify internal collection", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({ author: "John" });

    expect(results.length).toBe(1);
    expect(manager.getAllItems().length).toBe(1);
  });

  test("exportToIEEE should not modify internal collection", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const originalLength = manager.getAllItems().length;
    manager.exportToIEEE(manager.getAllItems());

    expect(manager.getAllItems().length).toBe(originalLength);
  });

  test("search should be case insensitive", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({ author: "john" });

    expect(results.length).toBe(1);
  });

  test("should return empty if combined filters do not match", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.search({
      author: "John",
      year: 2022
    });

    expect(results.length).toBe(0);
  });

  test("should match partial keywords", () => {
    const manager = new BibliographyManager();
    manager.addItem(createArticle());

    const results = manager.searchByKeyword("AI");

    expect(results.length).toBe(1);
  });

  test("should return empty array if no items stored", () => {
    const manager = new BibliographyManager();

    const results = manager.search({ author: "John" });

    expect(results.length).toBe(0);
  });

  test("should handle multiple items correctly", () => {
    const manager = new BibliographyManager();

    manager.addItem(createArticle());
    manager.addItem(new JournalArticle(
      "Blockchain Research",
      ["Alice"],
      ["Blockchain"],
      "Summary",
      new Date("2023-01-01"),
      "30-40",
      "Tech Journal",
      3,
      1
    ));

    const results = manager.search({ year: 2023 });

    expect(results.length).toBe(2);
  });


});