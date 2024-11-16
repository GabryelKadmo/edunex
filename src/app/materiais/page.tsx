import { TitleBar } from "@/components/title-bar";
import AreaMateriais from "./_components/area-materiais";
import { Footer } from "@/components/footer";
import { getMateriais } from "./actions";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title: `Edunex | Materiais`,
    openGraph: {
      title: `Materiais | Edunex`,
      url: `${baseUrl}/materiais/`,
      images: [
        {
          url: `${baseUrl}/card.png`,
          alt: "Materiais",
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'Edunex',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Materiais | Edunex`,
      images: [`${baseUrl}/card.png`],
    },
  };
}

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
