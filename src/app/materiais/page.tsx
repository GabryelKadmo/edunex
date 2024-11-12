import { TitleBar } from "@/components/title-bar";
import materials from "@/data/materials";
import AreaMateriais from "./_components/area-materiais";
import { Footer } from "@/components/footer";

export default function DicasPage() {
  return (
    <>
      <div className="px-6 lg:px-8 lg:hidden">
        <TitleBar title="Materiais" />
      </div>
      <section className="px-6 lg:px-8">
        <AreaMateriais materials={materials} />
      </section>
      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
}
