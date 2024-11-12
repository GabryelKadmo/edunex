
import { TitleBar } from "@/components/title-bar";
import AreaExplore from "./_components/area-explore";


export default function ExplorePage() {

  return ( 
    <>
      <div className="px-6 lg:hidden">
        <TitleBar title="Explore" />
      </div>

      <section className="px-6 py-6 lg:px-8">
        <AreaExplore />
      </section>
    </>
  );
}