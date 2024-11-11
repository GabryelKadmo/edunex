import ClockIcon from "@/components/icons/clock-icon";
import FlagIcon from "@/components/icons/flag-icon";
import { TitleBar } from "@/components/title-bar";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { createSlug } from "@/utils/format-string";
import Image from "next/image";

const PageSingleCourse = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;
  

  const curso = courses.find((course) => createSlug(course.title) === name);
  if (!curso) return <h1>Curso não encontrado</h1>;

  return (
    <>
      <div className="px-5 lg:px-8 lg:hidden">
        <TitleBar title={curso.category.name} />
      </div>
      <main className="px-5 lg:px-8 mt-8">
        <div className="w-full h-[240px] rounded-2xl relative overflow-hidden">
          <Image
            src={curso.image}
            alt={curso.title}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-primary-900 mt-6">
          {curso.title}
        </h1>
        <div className="mt-3 w-full flex items-center justify-between">
          <Badge className="text-sm bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
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
        <div className="text-neutral-600 text-sm mt-5 ">
          Criado por <span className="font-bold">{curso.owner}</span>
        </div>

        <div className="mt-6 border-t py-6">
          <p className="text-sm text-neutral-700 leading-6">{curso.description}</p>
        </div>
      </main>
    </>
  );
};

export default PageSingleCourse;
