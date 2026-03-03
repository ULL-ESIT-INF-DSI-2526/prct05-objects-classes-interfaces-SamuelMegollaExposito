import { BaseItem } from "./bibliographicItem";

/**
 * Clase abstracta para una tesis academica
 */
export abstract class AcademicThesis extends BaseItem {
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
   * @param university - Nombre de la universidad
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    protected university: string
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);

    if (!university || university.trim().length === 0) {
      throw new Error("La universidad no puede estar vacía");
    }
  }
}