import { ListAreas } from "@/components/list-areas";
import { TitleBar } from "@/components/title-bar";
import { courses } from "@/data/courses";
import AreaCursos from "./_components/area-cursos";
import { Footer } from "@/components/footer";

const CursosPage = () => {
  return (
    <>
      <div className="px-6 lg:px-8 lg:hidden">
        <TitleBar title="Cursos" />
      </div>
      <main className="mt-8 px-6 lg:px-8 flex flex-col gap-7">
        <div>
          <ListAreas />
        </div>
        <section className="mt-5">
          <AreaCursos courses={courses} />
        </section>
      </main>
      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default CursosPage;
