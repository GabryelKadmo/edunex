"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Course } from "@/types/course";
import { CardItem } from "@/components/card-item";

interface Props {
  courses: Course[];
}

export default function AreaCursos({ courses }: Props) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 1000); // Tempo de espera de 1 segundo
  };
  courses.sort((a, b) => new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime());
  
  const visibleCourses = courses.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCourses.map((course) => (
          <CardItem key={course.id} data={course} />
        ))}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center mt-8 text-primary">
          <Loader2 className="h-11 w-11 animate-spin" />
          <span className="ml-2">Carregando...</span>
        </div>
      )}

      {visibleCount < courses.length && (
        <Button
          onClick={loadMore}
          variant="ghost"
          className="w-full mt-16 px-4 py-2 border rounded text-neutral-600"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </Button>
      )}
    </>
  );
}