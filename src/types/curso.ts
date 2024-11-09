import { Category } from "./Category";

export interface Curso {
  id: number;
  title: string;
  description: string;
  image: string;
  owner: string;
  hasCertificate: boolean;
  registrationDate: string;
  category: Category;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  duration: number;
  prerequisite: string;
  minimumAge: string;
}