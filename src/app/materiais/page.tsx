import { TitleBar } from "@/components/title-bar";
import AreaMateriais from "./_components/area-materiais";
import { Footer } from "@/components/footer";
import { getMateriais } from "./actions";

export default async function DicasPage() {
  const materiais = await getMateriais();

  return (
    <>
      <div className="px-6 lg:px-8 lg:hidden">
        <TitleBar title="Materiais" />
      </div>
      <section className="px-6 lg:px-8">
        <AreaMateriais materials={materiais} />
      </section>
      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
}
