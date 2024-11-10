import { ListAreas } from "@/components/list-areas";
import { SearchInput } from "@/components/search-input";
import { TitleBar } from "@/components/title-bar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function ExplorePage() {
  return ( 
    <>
      <div className="px-5">
      <TitleBar title="Explore" />
      </div>

      <section className="px-5 py-6">
        <div>
          <SearchInput />
        </div>
        <div className="mt-8">
          <h3 className="font-semibold text-neutral-700">Pesquisar por cursos</h3>
          <div className="mt-6"><ListAreas/></div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-neutral-700">Pesquisar por dicas e materiais</h3>
          <div className="mt-6">
            {}
          </div>
        </div>
      </section>
    </>
  );
}