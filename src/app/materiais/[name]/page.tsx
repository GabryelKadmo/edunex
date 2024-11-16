import { Footer } from "@/components/footer";
import { TitleBar } from "@/components/title-bar";
import { Badge } from "@/components/ui/badge";
import materials from "@/data/materials";
import { createSlug } from "@/utils/format-string";
import Image from "next/image";
import Link from "next/link";
import { getMaterialBySlug } from "../actions";
import { getCursos } from "@/app/cursos/actions";
import { CardItem } from "@/components/card-item";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BottomBar from "@/app/cursos/_components/bottom-bar";

const PageDicasSingle = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const slug = (await params).name;

  const material = await getMaterialBySlug(slug);
  if (!material) return <h1>Material não encontrado</h1>;

  const cursos = await getCursos();

  return (
    <>
      <div className="px-6 lg:px-8 lg:mt-8">
        <TitleBar title={"Voltar"} data={material} />
      </div>
      <main className="px-6 lg:px-8 mt-8">
        <div className="w-full h-[340px] lg:h-[500px] rounded-2xl relative overflow-hidden">
          <Image
            src={material.image}
            alt={material.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-6 xl:col-span-7">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary-900 mt-10">
              {material.title}
            </h1>
            <div className="mt-7 w-full flex items-center gap-4">
              <Badge className="text-base bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
                {material.type}
              </Badge>
              <div className="flex items-center gap-0.5">
                <span className="text-sm text-neutral-500">autor: </span>
                <span className="text-sm font-semibold text-neutral-500">
                  {material.author}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t py-6">
              <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-wrap">
                {material.description}
              </p>

              <div className="text-neutral-600 text-sm mt-5 ">
                Referência:{" "}
                <span className="font-bold">{material.reference}</span>
              </div>

              {material.urlFile && (
                <div className="mt-10">
                  <Link
                    href={material.urlFile}
                    target="_blank"
                    className="bg-primary px-5 py-3 text-white rounded-md transition duration-200 hover:bg-primary-700"
                  >
                    Acessar Material Complementar
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3  ">
            <div className="bg-white lg:mt-[190px] rounded-2xl pb-10">
              <div className="text-center py-3 bg-primary rounded-t-2xl">
                <h3 className="text-primary-50 font-semibold">Cursos</h3>
              </div>
              <div className="flex lg:flex-col gap-10 px-4 mt-11">
                {cursos.slice(0, 3).map((curso) => (
                  <div key={curso.id} className="border rounded-2xl">
                    <CardItem data={curso} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className=" lg:px-8 mt-12 lg:hidden">
        <div className="flex justify-between items-center px-6">
          <h3 className="text-2xl text-neutral-700 font-semibold">Cursos</h3>
          <Link className="font-semibold text-primary" href={"/cursos"}>
            Ver todos
          </Link>
        </div>
        <ScrollArea className="w-full lg:whitespace-nowrap">
          <div className="flex lg:grid px-6 w-full gap-6 py-4 lg:grid-cols-3">
            {cursos.slice(0, 6).map((course) => (
              <CardItem key={course.id} data={course} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="px-6"/>
        </ScrollArea>
      </section>
      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
      <BottomBar title="Ver Cursos" />
    </>
  );
};

export default PageDicasSingle;
