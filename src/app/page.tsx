import MenuIcon from "@/components/icons/menu-icon";
import { ListCategories } from "@/components/list-categories";
import { SearchInput } from "@/components/search-input";
import Image from "next/image";

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
          <h1>Encontre um curso e <br/> explore <span className="text-primary">novas habilidades</span></h1>
          <SearchInput />
        </div>
        <div className="mt-7">
          <ListCategories />
        </div>
      </section>
    </>
  );
}
