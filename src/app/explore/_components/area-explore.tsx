// components/area-explore.tsx
"use client";

import { ListAreas } from "@/components/list-areas";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import materials from "@/data/materials";
import { CardItem } from "@/components/card-item";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/components/icons/search-icon";

// Função para remover acentos e caracteres especiais
const removeDiacritics = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const AreaExplore = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Estado para controlar o valor do input
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("search") || ""
  );

  // Estado para controlar a área selecionada
  const [selectedArea, setSelectedArea] = useState<string>(
    searchParams.get("area") || ""
  );

  useEffect(() => {
    // Atualiza os estados quando os parâmetros de busca mudam na URL
    setInputValue(searchParams.get("search") || "");
    setSelectedArea(searchParams.get("area") || "");
  }, [searchParams]);

  // Função chamada ao clicar no botão de pesquisa
  const handleSearch = () => {
    const areaParam = selectedArea
      ? `&area=${encodeURIComponent(selectedArea)}`
      : "";
    router.push(
      `/explore?search=${encodeURIComponent(inputValue)}${areaParam}`
    );
  };

  // Função chamada ao digitar no input (apenas atualiza o estado inputValue)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Função para lidar com a tecla Enter no input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Obtém a consulta de busca atual a partir dos parâmetros da URL
  const searchQuery = searchParams.get("search") || "";

  // Normaliza a consulta de busca
  const normalizedSearchQuery = removeDiacritics(searchQuery.toLowerCase());

  // Filtra os cursos com base na consulta de busca e na área selecionada
  const filteredCourses = courses.filter((course) => {
    const normalizedTitle = removeDiacritics(course.title.toLowerCase());
    const normalizedDescription = removeDiacritics(
      course.description.toLowerCase()
    );
    const normalizedCategory = removeDiacritics(
      course.category.name.toLowerCase()
    );
    const normalizedArea = removeDiacritics(
      course.category.area.name.toLowerCase()
    );

    const matchesSearch =
      normalizedTitle.includes(normalizedSearchQuery) ||
      normalizedDescription.includes(normalizedSearchQuery) ||
      normalizedCategory.includes(normalizedSearchQuery) ||
      normalizedArea.includes(normalizedSearchQuery);

    const matchesArea = selectedArea
      ? removeDiacritics(course.category.area.name.toLowerCase()) ===
        removeDiacritics(selectedArea.toLowerCase())
      : true;

    return matchesSearch && matchesArea;
  });

  // Filtra os materiais apenas se nenhuma área estiver selecionada
  const filteredMaterials = selectedArea
    ? []
    : materials.filter((material) => {
        const normalizedTitle = removeDiacritics(material.title.toLowerCase());
        const normalizedDescription = removeDiacritics(
          material.description.toLowerCase()
        );

        const matchesSearch =
          normalizedTitle.includes(normalizedSearchQuery) ||
          normalizedDescription.includes(normalizedSearchQuery);

        return matchesSearch;
      });

  console.log("CURSOS ---", filteredCourses);
  console.log("MATERIAIS ---", filteredMaterials);

  return (
    <div>
      {/* Barra de Pesquisa Personalizada */}
      <div
        tabIndex={0}
        className="py-2 bg-gray-100 rounded-full flex items-center justify-between pl-8 pr-3 ring-2 ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-300 border"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Detecta a tecla Enter
          placeholder="O que você deseja aprender?"
          className="bg-transparent focus:outline-none text-neutral-600"
          aria-label="Campo de pesquisa"
        />
        <Button
          type="button" /* Evita comportamentos de submit */
          onClick={handleSearch}
          className="bg-primary text-white rounded-full text-base flex items-center"
          aria-label="Botão para realizar pesquisa"
        >
          Buscar
          <SearchIcon fill="#fff" />
        </Button>
      </div>

      <div className="mt-8 lg:mt-20">
        <h3 className="font-semibold text-neutral-700">Pesquisar por cursos</h3>
        <div className="mt-6">
          <ListAreas />
        </div>
      </div>

      {/* Seção de Resultados */}
      {searchQuery && (
        <div className="mt-8 lg:flex-1 lg:mt-16">
          <p className="mt-10 text-neutral-700">
            Resultados para: <strong>{searchQuery}</strong> (
            {filteredCourses.length + filteredMaterials.length} encontrados)
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Exibição de Cursos */}
            {filteredCourses.map((course) => (
              <CardItem data={course} key={course.id} />
            ))}

            {/* Exibição de Materiais */}
            {filteredMaterials.map((material) => (
              <CardItem data={material} key={material.id} />
            ))}

            {/* Mensagem caso não haja cursos e materiais encontrados */}
            {filteredCourses.length === 0 && filteredMaterials.length === 0 && (
              selectedArea ? (
                <p className="text-center text-gray-500 col-span-3">
                  Nenhum curso encontrado para a área selecionada.
                </p>
              ) : (
                <p className="text-center text-gray-500 col-span-3">
                  Nenhum resultado encontrado para a sua busca.
                </p>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaExplore;