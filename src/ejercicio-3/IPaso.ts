export interface IPaso {
  readonly nombre: string;
  readonly duracionSegundos: number;
  readonly etiquetas: string[];
  readonly opcional: boolean;
  readonly vecesCompletado: number;

  completarPaso(): void;
}