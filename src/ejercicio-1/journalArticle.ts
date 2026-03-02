import { BaseItem } from "./baseItem";

/**
 * Represents a journal article.
 * 
 * Amplía BaseItem añadiendo volume y issue number.
 */
export class JournalArticle extends BaseItem {

  /**
   * Crea un nuevo JournalArticle
   * 
   * @param title - Titulo del articulo
   * @param authors - Lista de autores
   * @param keywords - Palabras
   * @param summary - Resumen
   * @param publicationDate - Fecha de publicacion
   * @param pages - Rango de páginas
   * @param publisher - Nombre de la revista
   * @param volume - Numero de volumen de la revista
   * @param issue - Numero de emisión de la revista
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    private volume: number,
    private issue: number
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);
    this.validateSpecific();
  }

  /**
   * Valida campos específicos de JournalArticle.
   */
  private validateSpecific(): void {
    if (this.volume <= 0) {
      throw new Error("Volume debe ser mayor a 0");
    }

    if (this.issue <= 0) {
      throw new Error("El numero de emisión debe ser mayor a 0");
    }
  }

  /**
   * Returns una referencia con formato IEEE para un artículo de revista
   */
  toIEEE(): string {
    const authorsFormatted = this.authors.join(", ");
    const year = this.publicationDate.getFullYear();

    return `${authorsFormatted}, "${this.title}," ${this.publisher}, vol. ${this.volume}, no. ${this.issue}, pp. ${this.pages}, ${year}.`;
  }
}