export enum SelectedPage {
    Início = "início",
    Benefícios = "benefícios",
    Aulas = "aulas",
    Contato = "contato",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }