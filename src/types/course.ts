import { Category } from "./category";

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string | undefined;
  owner: string;
  hasCertificate: boolean;
  registrationDate: string;
  category: Category;
  level: "Iniciante" | "Intermediário" | "Avançado";
  duration: number;
  prerequisite: string;
  minimumAge: string;
  link: string;
}

export interface DBCurso {
  id: number;
  titulo: string;
  descricao?: string;
  link?: string;
  imagem?: string;
  proprietario?: string;
  certificado?: string;
  data?: string;
  categoria?: string;
  nivel?: string;
  duracao?: number;
  requisitos?: string;
  idadeMinima?: string;
}