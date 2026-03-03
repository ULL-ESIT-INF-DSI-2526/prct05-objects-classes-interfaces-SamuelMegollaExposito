import { BibliographicItem } from "./IBibliographicItem";

/**
 * Clase abstracta que representa un bibliographic item generico
 * 
 * Proporciona propiedades comunes y lógica de validación compartida 
 * por todos los tipos de elementos bibliográficos.
 */
export abstract class BaseItem implements BibliographicItem {
  /**
   * Crea un nuevo elemento bibliográfico.
   * 
   * @param title - Titulo del trabajo
   * @param authors - Lista de autores
   * @param keywords - Palabras claves asociadas con el trabajo
   * @param summary - Resumen
   * @param publicationDate - Fecha de publicacion
   * @param pages - Rango de paginas
   * @param publisher - Editorial
   */
  constructor(
    protected title: string,
    protected authors: string[],
    protected keywords: string[],
    protected summary: string,
    protected publicationDate: Date,
    protected pages: string,
    protected publisher: string
  ) {
    this.validate();
  }

  /**
   * Valida campos bibliográficos comunes.
   */
  private validate(): void {
    if (!this.title || this.title.trim().length === 0) {
      throw new Error("El titulo no puede estar vacío.");
    }

    if (!this.authors || this.authors.length === 0) {
      throw new Error("Minimo se necesita un autor.");
    }

    if (!(this.publicationDate instanceof Date) || isNaN(this.publicationDate.getTime())) {
      throw new Error("Fecha de publicacion invalida");
    }
  }

  getTitle(): string {
    return this.title;
  }

  getAuthors(): string[] {
    return this.authors;
  }

  getKeywords(): string[] {
    return this.keywords;
  }

  getSummary(): string {
    return this.summary;
  }

  getPublicationDate(): Date {
    return this.publicationDate;
  }

  getPages(): string {
    return this.pages;
  }

  getPublisher(): string {
    return this.publisher;
  }

  /**
   * Must be implemented by subclasses to generate IEEE format.
   */
  abstract toIEEE(): string;
}