import { Category } from "@/types/category";
import { areas } from "./areas";

export 
const categories: Category[] = [
  { id: 1, name: 'Desenvolvimento Web', area: areas[0] },
  { id: 2, name: 'Inteligência Artificial', area: areas[0] },
  { id: 3, name: 'Ciência de Dados', area: areas[0] },
  { id: 4, name: 'Cibersegurança', area: areas[0] },
  { id: 5, name: 'Empreendedorismo', area: areas[1] },
  { id: 6, name: 'Gestão de Projetos', area: areas[1] },
  { id: 7, name: 'Finanças Empresariais', area: areas[1] },
  { id: 8, name: 'Liderança', area: areas[1] },
  { id: 9, name: 'Marketing Digital', area: areas[7] },
  { id: 10, name: 'SEO e SEM', area: areas[7] },
  { id: 11, name: 'Vendas e Persuasão', area: areas[7] },
  { id: 12, name: 'Publicidade', area: areas[7] },
  { id: 13, name: 'Gestão do Tempo', area: areas[2] },
  { id: 14, name: 'Produtividade', area: areas[2] },
  { id: 15, name: 'Inteligência Emocional', area: areas[2] },
  { id: 16, name: 'Comunicação Eficaz', area: areas[2] },
  { id: 17, name: 'Design Gráfico', area: areas[5] },
  { id: 18, name: 'UX/UI Design', area: areas[5] },
  { id: 19, name: 'Edição de Vídeo', area: areas[5] },
  { id: 20, name: 'Fotografia', area: areas[5] },
  { id: 21, name: 'Saúde Mental', area: areas[4] },
  { id: 22, name: 'Nutrição', area: areas[4] },
  { id: 23, name: 'Exercício Físico', area: areas[4] },
  { id: 24, name: 'Meditação', area: areas[4] },
  { id: 25, name: 'Inglês', area: areas[6] },
  { id: 26, name: 'Espanhol', area: areas[6] },
  { id: 27, name: 'Francês', area: areas[6] },
  { id: 28, name: 'Alemão', area: areas[6] },
  { id: 29, name: 'Psicologia', area: areas[3] },
  { id: 30, name: 'Sociologia', area: areas[3] },
  { id: 31, name: 'História', area: areas[3] },
  { id: 32, name: 'Filosofia', area: areas[3] },
  { id: 33, name: 'Outros', area: areas[8] }
];