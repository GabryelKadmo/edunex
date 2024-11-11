import { CardCourse } from "@/components/card-course";
import { ListAreas } from "@/components/list-areas";
import { TitleBar } from "@/components/title-bar";
import { courses } from "@/data/courses";

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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(courses => (
              <CardCourse key={courses.id} data={courses}/>
            ))}
          </div>
        </section>
      </main>
    </>
   );
}
 
export default CursosPage;