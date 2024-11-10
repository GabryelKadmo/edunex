import { CardCourse } from "@/components/card-course";
import { CardHorizontal } from "@/components/card-horizontal";
import MenuIcon from "@/components/icons/menu-icon";
import { ListAreas } from "@/components/list-areas";
import Members from "@/components/members";
import { SearchInput } from "@/components/search-input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="">
        <div className="md:hidden px-5 md:px-8 flex justify-between items-center">
          <Image
            alt="Logo Edunex"
            src={"/logoicon.svg"}
            width={43}
            height={43}
          />

          <MenuIcon />
        </div>
      </header>
      <section className="px-8 hidden lg:block">
        <div>
          <div className="h-[276px] w-full relative overflow-hidden rounded-2xl">
            <Image alt="bg" src={"/bg-hero.svg"} fill objectFit="cover" />
            <div className="absolute left-[66px] top-[48px] flex flex-col items-center justify-center">
              <h1 className="text-center font-bold text-3xl text-primary-50 ">
                Conectando você a oportunidades de <br />
                aprendizado e crescimento
              </h1>
              <div className="flex gap-20 mt-6">
                <div className="flex flex-col gap-2">
                  <span className="text-primary-50 font-bold text-5xl">60</span>
                  <span className="text-xl text-primary-100 font-bold">Cursos</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary-50 font-bold text-5xl">38</span>
                  <span className="text-xl text-primary-100 font-bold">Dicas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-8 py-8 md:py-0">
        <div className="flex flex-col gap-8 text-neutral-700 font-semibold text-2xl lg:hidden">
          <h1>
            Encontre um curso e <br /> explore
            <span className="text-primary">novas habilidades</span>
          </h1>
          <SearchInput />
        </div>
        <div className="mt-7 lg:mt-4">
          <ListAreas />
        </div>
      </section>
      <section>
        <div className="px-5 md:px-8 flex items-center justify-between mb-2 lg:py-8">
          <h2 className="font-semibold text-xl text-gray-800">
            Cursos Populares
          </h2>
          <Link className="font-semibold text-primary" href={"/cursos"}>
            Ver todos
          </Link>
        </div>
        <div className="pl-5 md:px-8">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex md:grid md:grid-cols-2 w-full gap-6 py-4 lg:grid-cols-3">
              {courses.map((course) => (
                <CardCourse key={course.id} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      <section className="mt-11 px-5 md:px-8 ">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-semibold text-xl text-gray-800">Materiais</h2>
          <Link className="font-semibold text-primary" href={"/dicas"}>
            Ver todas
          </Link>
        </div>
        <div>
          <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <CardHorizontal key={course.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-11 lg:py-4">
        <div
          className="relative h-[580px] sm:h-[380px] bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: "url('/bg-about.png')" }}
        >
          <div className="absolute inset-0 flex flex-col items-center text-white text-center px-4 py-16 sm:py-6 md:py-10">
            <div className="mt-1">
              <Image
                alt="Polegar"
                src={"/polegar.png"}
                width={30}
                height={30}
              />{" "}
            </div>
            <h2 className="text-2xl font-semibold text-neutral-700">
              Sobre nós
            </h2>
            <p className="leading-7 mt-12 sm:mt-3 text-center text-neutral-500 sm:p-8 md:p-4 lg:px-28">
              Somos um grupo de alunos da Faculdade Unex, unidos pelos cursos de
              Administração e Sistemas de Informação, com o objetivo de criar
              uma solução que impactasse positivamente a vida das pessoas.
              Acreditamos que o acesso à educação e ao desenvolvimento
              profissional deve ser acessível a todos, e foi com essa visão que
              desenvolvemos nossa plataforma.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8">
        <div
          className="relative h-[150px] sm:h-[200px] lg:h-[230px] bg-cover bg-center rounded-2xl flex items-center justify-center"
          style={{ backgroundImage: "url('/bg-our-team.png')" }}
        >
          <div className="absolute inset-0 flex gap-2 items-center justify-center text-white text-center">
            <h2 className="text-2xl font-semibold text-primary-200 lg:text-3xl">
              Nossa Equipe
            </h2>
            <Image alt="Polegar" src={"/coracao.png"} width={30} height={30} className="w-10 h-10"/>
          </div>
        </div>
        <div className="mt-12">
          <Members />
        </div>
      </section>
    </>
  );
}
