import { BibliographicItem } from "./IBibliographicItem";

/**
 * Maneja una collecion de bibliographic item
 */
export class BibliographyManager {

  private items: BibliographicItem[] = [];

  /**
   * Añade un nuevo bibliographic item
   * @param item - El item a añadir
   */
  addItem(item: BibliographicItem): void {
    this.items.push(item);
  }

  /**
   * Devuelve todos los items almacenados
   */
  getAllItems(): BibliographicItem[] {
    return [...this.items];
  }

  /**
   * Busca el item por una keyword
   * @param keyword - Keyword para buscar
   */
  searchByKeyword(keyword: string): BibliographicItem[] {
    return this.items.filter(item =>
      item.getKeywords().some(k =>
        k.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }

  /**
   * Búsqueda genérica utilizando múltiples filtros opcionales.
   */
  search(filters: {title?: string; author?: string; year?: number; publisher?: string;}): BibliographicItem[] {
    return this.items.filter(item => {
      if (filters.title && !item.getTitle().toLowerCase().includes(filters.title.toLowerCase())) {
        return false;
      }
      if (filters.author && !item.getAuthors().some(author => author.toLowerCase().includes(filters.author!.toLowerCase()))) {
        return false;
      }
      if (filters.year && item.getPublicationDate().getFullYear() !== filters.year) {
        return false;
      }
      if (filters.publisher && !item.getPublisher().toLowerCase().includes(filters.publisher.toLowerCase())) {
        return false;
      }
      return true;
    });
  }

  /**
   * Exporta una lista de elementos al formato IEEE.
   */
  exportToIEEE(items: BibliographicItem[]): string[] {
    return items.map(item => item.toIEEE());
  }

  /**
   * Imprime los items en forma de tabla
   */
  printTable(items: BibliographicItem[]): void {
    console.table(items.map(item => ({
        Title: item.getTitle(),
        Authors: item.getAuthors().join(", "),
        Year: item.getPublicationDate().getFullYear(),
        Publisher: item.getPublisher()
      }))
    );
  }
}