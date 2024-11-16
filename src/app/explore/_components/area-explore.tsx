"use client";

import { ListAreas } from "@/components/list-areas";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CardItem } from "@/components/card-item";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/components/icons/search-icon";
import { Course } from "@/types/course";
import { Loader2 } from "lucide-react";
import { Material } from "@/types/material";


const removeDiacritics = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const AreaExplore = ({ courses, materials }: { courses: Course[], materials: Material[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("search") || ""
  );

  const [selectedArea, setSelectedArea] = useState<string>(
    searchParams.get("area") || ""
  );

  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de loading

  useEffect(() => {
    setInputValue(searchParams.get("search") || "");
    setSelectedArea(searchParams.get("area") || "");
  }, [searchParams]);

  const handleSearch = () => {
    setIsLoading(true); // Inicia o loading

    const areaParam = selectedArea
      ? `&area=${encodeURIComponent(selectedArea)}`
      : "";
    router.push(
      `/explore?search=${encodeURIComponent(inputValue)}${areaParam}`
    );

    // Simular o fim do loading após a navegação
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ajuste o tempo conforme necessário
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const searchQuery = searchParams.get("search") || "";

  const normalizedSearchQuery = removeDiacritics(searchQuery.toLowerCase());

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

  return (
    <div>
      <div
        tabIndex={0}
        className="py-2 bg-gray-100 rounded-full flex items-center justify-between pl-8 pr-3 ring-2 ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-300 border"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="O que você deseja aprender?"
          className="bg-transparent border-none focus:outline-none text-neutral-600"
          aria-label="Campo de pesquisa"
        />
        <Button
          type="button"
          onClick={handleSearch}
          className="bg-primary text-white rounded-full text-base flex items-center"
          aria-label="Botão para realizar pesquisa"
          disabled={isLoading} // Desabilita o botão enquanto está carregando
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5" /> // Componente de spinner
          ) : (
            <>
              <span className="hidden lg:block">Buscar</span>
              <SearchIcon fill="#fff" />
            </>
          )}
        </Button>
      </div>

      <div className="mt-8 lg:mt-12">
        <h3 className="font-semibold text-neutral-700">Pesquisar por cursos</h3>
        <div className="mt-6">
          <ListAreas />
        </div>
      </div>

      {searchQuery && (
        <div className="mt-8 lg:flex-1 lg:mt-16">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="w-10 h-10" />
            </div>
          ) : (
            <>
              <p className="mt-10 text-neutral-700">
                Resultados para: <strong>{searchQuery}</strong> (
                {filteredCourses.length + filteredMaterials.length} encontrados)
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CardItem data={course} key={course.id} />
                ))}

                {filteredMaterials.map((material) => (
                  <CardItem data={material} key={material.id} />
                ))}

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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AreaExplore;