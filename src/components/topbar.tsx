"use client"

import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

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
      <div
        tabIndex={0}
        className="bg-primary-50 w-72 rounded-full flex items-center justify-between px-4 ring-2 ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-300"
      >
        <SearchIcon size={18} className="text-primary" />
        <Input placeholder="O que você procura..." className="placeholder:text-neutral-400 text-zinc-600 bg-transparent border-none ring-0 ring-transparent ring-offset-transparent focus-visible:ring-transparent" />
      </div>
    </div>
  );
};