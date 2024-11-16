import { TitleBar } from "@/components/title-bar";
import AreaExplore from "./_components/area-explore";
import { Footer } from "@/components/footer";
import { getCursos } from "../cursos/actions";
import { getMateriais } from "../materiais/actions";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title: `Edunex | Explore`,
    openGraph: {
      title: `Explore | Edunex`,
      url: `${baseUrl}/explore/`,
      images: [
        {
          url: `${baseUrl}/card.png`,
          alt: "Explore",
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'Edunex',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Explore | Edunex`,
      images: [`${baseUrl}/card.png`],
    },
  };
}

export default async function ExplorePage() {

  const courses = await getCursos();
  const materiais = await getMateriais();

  return (
    <>
      <div className="px-6 lg:hidden">
        <TitleBar title="Explore" />
      </div>

      <section className="px-6 py-6 lg:px-8 ">
        <AreaExplore courses={courses} materials={materiais}/>
      </section>

      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
}
