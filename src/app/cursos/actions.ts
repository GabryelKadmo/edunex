"use server";

import { categories } from "@/data/categories";
import { Course, DBCurso } from "@/types/course";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getCursos() {
  const response = await fetch(`${BASE_URL}/data/cursos.json`);
  const data: DBCurso[] = await response.json();

  const cursos: Course[] = data.map((curso) => {
    const isValidImage =
      typeof curso.imagem === 'string' &&
      (curso.imagem.startsWith('/') ||
        curso.imagem.startsWith('http://') ||
        curso.imagem.startsWith('https://'));

    return {
      id: curso.id,
      title: curso.titulo,
      description: curso.descricao || "",
      duration: curso.duracao || 0,
      hasCertificate: curso.certificado === "Sim",
      owner: curso.proprietario || "",
      registrationDate: curso.data || "",
      prerequisite: curso.requisitos || "",
      minimumAge: curso.idadeMinima || "",
      link: curso.link || "",
      level: ["Iniciante", "Intermediário", "Avançado"].includes(
        curso.nivel || ""
      )
        ? (curso.nivel as "Iniciante" | "Intermediário" | "Avançado")
        : "Iniciante",
      image: isValidImage ? curso.imagem : "/default-image.png",
      category: categories.find(category => category.name === curso.categoria)!,
    };
  });

  for (let i = cursos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cursos[i], cursos[j]] = [cursos[j], cursos[i]];
  }

  return cursos;
}

