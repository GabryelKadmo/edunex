
import { Course } from "@/types/course";
import { categories } from "./categories";

export const courses: Course[] = [
  {
    id: 1,
    title: "Introdução ao Desenvolvimento Web",
    description: "Aprenda os fundamentos do desenvolvimento web, incluindo HTML, CSS e JavaScript.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?w=800",
    owner: "John Doe",
    hasCertificate: true,
    registrationDate: "2023-01-15",
    category: categories.find(category => category.name === 'Desenvolvimento Web')!,
    level: "Iniciante",
    duration: 40,
    prerequisite: "Nenhum",
    minimumAge: "12+"
  },
  {
    id: 2,
    title: "Inteligência Artificial para Iniciantes",
    description: "Descubra os conceitos básicos de inteligência artificial e machine learning.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?w=800",
    owner: "Jane Smith",
    hasCertificate: true,
    registrationDate: "2023-02-20",
    category: categories.find(category => category.name === 'Inteligência Artificial')!,
    level: "Iniciante",
    duration: 50,
    prerequisite: "Conhecimento básico de programação",
    minimumAge: "15+"
  },
  {
    id: 3,
    title: "Ciência de Dados com Python",
    description: "Aprenda a analisar dados e criar modelos preditivos usando Python.",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800",
    owner: "Alice Johnson",
    hasCertificate: true,
    registrationDate: "2023-03-10",
    category: categories.find(category => category.name === 'Ciência de Dados')!,
    level: "Intermediário",
    duration: 60,
    prerequisite: "Conhecimento básico de Python",
    minimumAge: "16+"
  },
  {
    id: 4,
    title: "Design Gráfico para Iniciantes",
    description: "Explore os princípios do design gráfico e aprenda a usar ferramentas como Adobe Photoshop.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
    owner: "Bob Brown",
    hasCertificate: true,
    registrationDate: "2023-04-05",
    category: categories.find(category => category.name === 'Design Gráfico')!,
    level: "Iniciante",
    duration: 30,
    prerequisite: "Nenhum",
    minimumAge: "14+"
  },
  {
    id: 5,
    title: "Marketing Digital Avançado",
    description: "Aprofunde-se nas estratégias de marketing digital e aprenda a otimizar campanhas online.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    owner: "Charlie Davis",
    hasCertificate: true,
    registrationDate: "2023-05-12",
    category: categories.find(category => category.name === 'Marketing Digital')!,
    level: "Avançado",
    duration: 70,
    prerequisite: "Conhecimento básico de marketing digital",
    minimumAge: "18+"
  }
];