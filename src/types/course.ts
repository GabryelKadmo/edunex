import { Category } from "./category";

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
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