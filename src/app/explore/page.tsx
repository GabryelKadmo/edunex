import { TitleBar } from "@/components/title-bar";
import AreaExplore from "./_components/area-explore";
import { Footer } from "@/components/footer";

export default function ExplorePage() {
  return (
    <>
      <div className="px-6 lg:hidden">
        <TitleBar title="Explore" />
      </div>

      <section className="px-6 py-6 lg:px-8 ">
        <AreaExplore />
      </section>

      <footer className="my-16 md:my-0 md:mt-10">
        <Footer />
      </footer>
    </>
  );
}
