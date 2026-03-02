import { AcademicThesis } from "./academicThesis";

/**
 * Representa un Trabajo Fin de Máster (TFM).
 */
export class TFM extends AcademicThesis {

  toIEEE(): string {
    const authorsFormatted = this.authors.join(", ");
    const year = this.publicationDate.getFullYear();

    return `${authorsFormatted}, "${this.title}," Master's Thesis, ${this.university}, ${year}.`;
  }
}