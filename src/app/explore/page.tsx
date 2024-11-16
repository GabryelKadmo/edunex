import { TitleBar } from "@/components/title-bar";
import AreaExplore from "./_components/area-explore";
import { Footer } from "@/components/footer";
import { getCursos } from "../cursos/actions";
import { getMateriais } from "../materiais/actions";

export default async function ExplorePage() {

  const courses = await getCursos();
  const materiais = await getMateriais();

  return (
    <>
      <div className="px-6 lg:hidden">
        <TitleBar title="Explore" />
      </div>

      <section className="px-6 py-6 lg:px-8 ">
        <AreaExplore courses={courses} materials={materiais}/>
      </section>

      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
}
