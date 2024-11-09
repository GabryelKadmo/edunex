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
        <div className="md:hidden px-5 flex justify-between items-center">
          <Image
            alt="Logo Edunex"
            src={"/logoicon.svg"}
            width={43}
            height={43}
          />

          <MenuIcon />
        </div>
      </header>
      <section className="px-5 py-8">
        <div className="flex flex-col gap-8 text-neutral-700 font-semibold text-2xl">
          <h1>
            Encontre um curso e <br /> explore{" "}
            <span className="text-primary">novas habilidades</span>
          </h1>
          <SearchInput />
        </div>
        <div className="mt-7">
          <ListAreas />
        </div>
      </section>
      <section>
        <div className="px-5 flex items-center justify-between mb-2">
          <h2 className="font-semibold text-xl text-gray-800">
            Cursos Populares
          </h2>
          <Link className="font-semibold text-primary" href={"/cursos"}>
            Ver todos
          </Link>
        </div>
        <div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-full space-x-4 p-4">
              {courses.map((course) => (
                <CardCourse key={course.id} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      <section className="mt-11 px-5 ">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-semibold text-xl text-gray-800">Dicas</h2>
          <Link className="font-semibold text-primary" href={"/dicas"}>
            Ver todas
          </Link>
        </div>
        <div>
          <div className="flex flex-col w-full gap-8">
            {courses.map((course) => (
              <CardHorizontal key={course.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-11">
        <div
          className="relative h-[580px] bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: "url('/bg-about.png')" }}
        >
          <div className="absolute inset-0 flex flex-col items-center text-white text-center px-4 py-16">
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
            <p className="mt-12 text-center text-neutral-500">
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

      <section className="px-5">
        <div
          className="relative h-[150px] bg-cover bg-center rounded-2xl flex items-center justify-center"
          style={{ backgroundImage: "url('/bg-our-team.png')" }}
        >
          <div className="absolute inset-0 flex gap-2 items-center justify-center text-white text-center">
            <h2 className="text-2xl font-semibold text-primary-200">
              Nossa Equipe
            </h2>
            <Image alt="Polegar" src={"/coracao.png"} width={30} height={30} />
          </div>
        </div>
        <div className="mt-12">
          <Members />
        </div>
      </section>
    </>
  );
}
