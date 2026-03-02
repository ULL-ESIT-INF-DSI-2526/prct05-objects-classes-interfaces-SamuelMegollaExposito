import { BaseItem } from "./baseItem";

/**
 * Representa un capitulo de un libro
 */
export class BookChapter extends BaseItem {
  /**
   * Crea un nuevo BookChapter
   * 
   * @param title - Titulo del articulo
   * @param authors - Lista de autores
   * @param keywords - Palabras
   * @param summary - Resumen
   * @param publicationDate - Fecha de publicacion
   * @param pages - Rango de páginas
   * @param publisher - Nombre de la revista
   * @param bookTitle - Nombre del libro
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    private bookTitle: string
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);

    if (!bookTitle || bookTitle.trim().length === 0) {
      throw new Error("El nombre del libro no puede estar vacío");
    }
  }

  toIEEE(): string {
    const authorsFormatted = this.authors.join(", ");
    const year = this.publicationDate.getFullYear();

    return `${authorsFormatted}, "${this.title}," in ${this.bookTitle}, ${this.publisher}, ${year}, pp. ${this.pages}.`;
  }
}