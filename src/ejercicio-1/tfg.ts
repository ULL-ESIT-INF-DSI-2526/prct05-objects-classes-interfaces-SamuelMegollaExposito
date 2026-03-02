import { AcademicThesis } from "./academicThesis";

/**
 * Representa un Trabajo Fin de Grado (TFG).
 */
export class TFG extends AcademicThesis {

  toIEEE(): string {
    const authorsFormatted = this.authors.join(", ");
    const year = this.publicationDate.getFullYear();

    return `${authorsFormatted}, "${this.title}," Bachelor's Thesis, ${this.university}, ${year}.`;
  }
}