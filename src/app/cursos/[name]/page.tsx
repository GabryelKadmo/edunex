import { getCursos } from "@/app/cursos/actions";
import { Footer } from "@/components/footer";
import ClockIcon from "@/components/icons/clock-icon";
import FlagIcon from "@/components/icons/flag-icon";
import { TitleBar } from "@/components/title-bar";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { createSlug } from "@/utils/format-string";
import Image from "next/image";
import BottomBar from "../_components/bottom-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CertificateIcon from "@/components/icons/certificate-icon";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CardItem } from "@/components/card-item";
import { Separator } from "@/components/ui/separator";

const PageSingleCourse = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;
  const courses = await getCursos();

  const curso = courses.find((course) => createSlug(course.title) === name);
  if (!curso) return <h1>Curso não encontrado</h1>;

  return (
    <>
      <div className="px-6 lg:px-8 lg:mt-8">
        <TitleBar title={"Voltar"} data={curso} />
      </div>
      <main className="px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="md:order-2 lg:order-1 xl:order-2">
            <div className="w-full h-[350px] md:h-full lg:h-[350px] xl:h-full rounded-2xl relative overflow-hidden">
              <Image
                src={curso.image || "/bg-hero.jpg"}
                alt={curso.title}
                fill
                className="object-cover"
              />
              <Badge className="py-1.5 text-sm absolute font-medium gap-2 top-5 left-5 bg-primary">
              <CertificateIcon />
              Com Certificado
            </Badge>
            </div>
          </div>
          <div className="md:order-1 lg:order-2 xl:order-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary-900">
              {curso.title}
            </h1>
            <div className="mt-7 w-full flex items-center gap-4">
              <Badge className="text-base bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
                {curso.category.name}
              </Badge>
              <div className="flex items-center gap-0.5">
                <ClockIcon width={18} height={18} />
                <span className="text-sm font-medium">{curso.duration}h</span>
              </div>
              <div className="flex items-center gap-0.5">
                <FlagIcon width={18} height={18} />
                <span className="text-sm font-medium">{curso.level}</span>
              </div>
            </div>
            <div className="text-neutral-600 text-sm mt-5">
              <p>Criado por <span className="font-bold">{curso.owner}</span></p>
              <p className="text-neutral-400 mt-2"><span>Visualizado em:</span> <span>{curso.registrationDate}</span></p>
            </div>
            <div className="mt-6 border-t py-6">
              <p className="text-base text-neutral-700 leading-6 whitespace-pre-wrap">
                {curso.description}
              </p>
              <div className="mt-5 text-neutral-600 text-sm flex gap-3 flex-col lg:flex-row lg:gap-7">
                <p>
                  <span className="font-semibold">Pré-requisitos:</span>{" "}
                  <span>{curso.prerequisite}</span>
                </p>
                <p>
                  <span className="font-semibold">Idade mínima:</span>{" "}
                  <span>{curso.minimumAge}</span>
                </p>
              </div>
            </div>
            <Link
              href={curso.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block mt-2 w-full bg-primary-600 text-white py-3 text-center rounded transition lg:hover:bg-primary-700"
            >
              Acessar Curso
            </Link>
          </div>
        </div>
      </main>

      <div className="px-6 lg:px-8 mt-10">
        <Separator />
      </div>

      <section className="lg:px-8 mt-10">
        <h3 className=" px-6 text-xl text-neutral-700 font-semibold">Cursos da mesma área</h3>
      <ScrollArea className="w-full lg:whitespace-nowrap">
            <div className="flex lg:grid px-6 w-full gap-6 py-4 lg:grid-cols-3">
                {courses
                .filter((course) => course.category.area.id === curso.category.area.id && course.id !== curso.id)
                .slice(0, 6)
                .map((course) => (
                  <CardItem key={course.id} data={course} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="px-6"/>
          </ScrollArea>
      </section>

      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
      <BottomBar data={curso} />
    </>
  );
};

export default PageSingleCourse;
