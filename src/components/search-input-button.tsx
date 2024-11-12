import Link from "next/link";
import SearchIcon from "./icons/search-icon";

export const SearchInputButton = () => {


  return (
      <Link
        href="/explore"
        tabIndex={0}
        className="py-2 bg-primary-50 w-72 rounded-full flex gap-4 items-center px-4 ring-2 ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-300"      >
        <SearchIcon />
        <span className="text-neutral-400" >Buscar cursos...</span>
      </Link>
  );
};