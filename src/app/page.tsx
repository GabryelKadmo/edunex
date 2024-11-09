import { CardCourse } from "@/components/card-course";
import MenuIcon from "@/components/icons/menu-icon";
import { ListAreas } from "@/components/list-areas";
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
          <h2 className="font-semibold text-xl text-gray-800">Cursos Populares</h2>
          <Link className="font-semibold text-primary" href={"/cursos"}>Ver todos</Link>
        </div>
        <div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-full space-x-4 p-4">
              {courses.map((course) => (
                <CardCourse key={course.id}/>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </>
  );
}
