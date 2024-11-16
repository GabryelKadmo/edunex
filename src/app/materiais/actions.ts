import { DBMaterial, Material } from "@/types/material";
import { createSlug } from "@/utils/format-string";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function getMateriais() {
  const response = await fetch(`${BASE_URL}/data/materiais.json`);
  const data: DBMaterial[] = await response.json();

  const materiais: Material[] = data.map((material) => {
    const isValidImage =
      typeof material.imagem === 'string' &&
      (material.imagem.startsWith('/') ||
        material.imagem.startsWith('http://') ||
        material.imagem.startsWith('https://'));

    return {
      id: material.id,
      title: material.titulo,
      description: material.descricao || "",
      author: material.autor,
      image: isValidImage ? material.imagem : "/bg-about.png",
      reference: material.referencia,
      type: material.tipo,
      urlFile: material.anexo || "",
    };
  });

  for (let i = materiais.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [materiais[i], materiais[j]] = [materiais[j], materiais[i]];
  }

  return materiais;
}

export async function getMaterialBySlug(slug: string) {
  const materiais = await getMateriais();

  return materiais.find(material => createSlug(material.title) === slug);
}
