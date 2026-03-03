/**
 * Interfaz que represenra un bibliographic item generico
 */
export interface BibliographicItem {
  getTitle(): string;
  getAuthors(): string[];
  getKeywords(): string[];
  getSummary(): string;
  getPublicationDate(): Date;
  getPages(): string;
  getPublisher(): string;

  /**
 * Returns la referencia en formato IEEE de bibliographic 
 */
  toIEEE(): string;
}