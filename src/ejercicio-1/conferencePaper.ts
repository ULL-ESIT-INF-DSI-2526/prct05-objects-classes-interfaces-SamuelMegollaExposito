import { BaseItem } from "./baseItem";

/**
 * Representa una contribucion a congreso
 */
export class ConferencePaper extends BaseItem {
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
   * @param conferenceName - Nombre del congreso
   * @param location - Localización del congreso
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    private conferenceName: string,
    private location: string
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);
    this.validateSpecific();
  }

  /**
   * Valida los campos específicos para conferencePaper.
   */
  private validateSpecific(): void {
    if (!this.conferenceName || this.conferenceName.trim().length === 0) {
      throw new Error("El nombre del congreso no puede estar vacío");
    }

    if (!this.location || this.location.trim().length === 0) {
      throw new Error("La localización del congreso no puede estar vacía");
    }
  }

  /**
   * Returns una referencia en formato IEEE
   */
  toIEEE(): string {
    const authorsFormatted = this.authors.join(", ");
    const year = this.publicationDate.getFullYear();

    return `${authorsFormatted}, "${this.title}," in Proc. ${this.conferenceName}, ${this.location}, ${year}, pp. ${this.pages}.`;
  }
}