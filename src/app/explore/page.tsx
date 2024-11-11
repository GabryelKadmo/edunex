import { ListAreas } from "@/components/list-areas";
import { SearchInput } from "@/components/search-input";
import { TitleBar } from "@/components/title-bar";

export default function ExplorePage() {
  return ( 
    <>
      <div className="px-6 lg:hidden">
      <TitleBar title="Explore" />
      </div>

      <section className="px-6 py-6 lg:px-8">
        <div>
          <SearchInput />
        </div>
        <div className="mt-8">
          <h3 className="font-semibold text-neutral-700">Pesquisar por cursos</h3>
          <div className="mt-6"><ListAreas/></div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-neutral-700">Pesquisar por dicas e materiais</h3>
          <div className="mt-6 flex gap-5 flex-wrap">
            <div className="px-5 py-2 text-gray-800 bg-neutral-200 rounded-full flex items-center justify-center">Dicas</div>
            <div className="px-5 py-2 text-gray-800 bg-neutral-200 rounded-full flex items-center justify-center">E-books</div>
            <div className="px-5 py-2 text-gray-800 bg-neutral-200 rounded-full flex items-center justify-center">Planilhas</div>
            <div className="px-5 py-2 text-gray-800 bg-neutral-200 rounded-full flex items-center justify-center">Vídeos</div>
            <div className="px-5 py-2 text-gray-800 bg-neutral-200 rounded-full flex items-center justify-center">Podcasts</div>
          </div>
        </div>
      </section>
    </>
  );
}