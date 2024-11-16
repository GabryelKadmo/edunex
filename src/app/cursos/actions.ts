"use server";

import { categories } from "@/data/categories";
import { Course, DBCurso } from "@/types/course";
import cursosData from "@/data/cursos.json";
import { createSlug } from "@/utils/format-string";

export async function getCursos() {

  const data: DBCurso[] = cursosData;

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

export async function getCursoBySlug(slug: string) {
  const cursos = await getCursos();

  return cursos.find(curso => createSlug(curso.title) === slug);
}
