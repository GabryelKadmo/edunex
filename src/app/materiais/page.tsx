import { CardEmphasis } from "@/components/card-emphasis";
import { CardHorizontal } from "@/components/card-horizontal";
import { TitleBar } from "@/components/title-bar";
import materials from "@/data/materials";

export default function DicasPage() {
  return (
    <>
      <div className="px-6 lg:px-8 lg:hidden">
        <TitleBar title="Materiais" />
      </div>
      <section className="px-6 lg:px-8">
        <div className="h-[700px] lg:h-[300px] grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8">
          <div className="lg:col-span-4 lg:row-span-2">
            <CardEmphasis data={materials[0]} />
          </div>
          <div className="lg:col-span-3">
            <CardEmphasis data={materials[1]} />
          </div>
          <div className="lg:col-span-3">
            <CardEmphasis data={materials[2]} />
          </div>
        </div>
        <div className="mt-16 w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
          {materials.slice(3).map((material) => (
            <div key={material.id}>
              <CardHorizontal data={material} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
