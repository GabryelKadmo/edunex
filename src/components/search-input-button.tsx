import Link from "next/link";
import SearchIcon from "./icons/search-icon";

export const SearchInputButton = () => {


  return (
      <Link
        href="/explore"
        tabIndex={0}
        className="py-3.5 lg:py-2 bg-neutral-50 border w-full lg:w-72 rounded-full flex gap-4 items-center px-4"      >
        <SearchIcon width={24} height={24}/>
        <span className="text-sm font-normal text-neutral-400" >Buscar cursos...</span>
      </Link>
  );
};