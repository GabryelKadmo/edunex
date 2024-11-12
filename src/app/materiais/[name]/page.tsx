import { Footer } from "@/components/footer";
import { TitleBar } from "@/components/title-bar";
import { Badge } from "@/components/ui/badge";
import materials from "@/data/materials";
import { createSlug } from "@/utils/format-string";
import Image from "next/image";
import Link from "next/link";

const PageDicasSingle = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = (await params).name;

  const material = materials.find(
    (material) => createSlug(material.title) === name
  );
  if (!material) return <h1>Material não encontrado</h1>;

  return (
    <>
      <div className="px-6 lg:px-8 lg:hidden">
        <TitleBar title={material.type} data={material} />
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
          <p className="text-base text-neutral-700 leading-relaxed">
            {material.description}
          </p>

          <div className="text-neutral-600 text-sm mt-5 ">
            Referência: <span className="font-bold">{material.reference}</span>
          </div>

          {material.urlFile && (
            <div className="mt-10">
              <Link
                href={material.urlFile}
                className="bg-primary px-5 py-3 text-white rounded-md transition duration-200 hover:bg-primary-700"
              >
                Baixar Material
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default PageDicasSingle;
