export interface Material {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "Dicas" | "E-book" | "Planilhas" | "Podcasts" | "Vídeos";
  urlFile?: string;
  author: string;
  reference: string;
}

export interface DBMaterial {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  tipo: string;
  anexo?: string;
  autor: string;
  referencia: string;
}