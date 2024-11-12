"use client"

import { usePathname } from "next/navigation";
import { SearchInputButton } from "./search-input-button";

const pageTitles: { [key: string]: string } = {
  "/": "Início",
  "/explore": "Explore",
  "/materiais": "Materiais",
  "/gerador-de-curriculo": "Gerador de Currículo",
  "/cursos": "Cursos",
};

export const TopBar = () => {
  const pathname = usePathname();

  // Extrai a categoria da URL
  const category = pathname.split('/')[1];
  const title = pageTitles[`/${category}`] || "Início";

  return (
    <div className="bg-white w-full flex justify-between items-center px-6 py-4 rounded-2xl">
      <h1 className="text-2xl font-bold text-primary-950">{title}</h1>
      <SearchInputButton />
    </div>
  );
};