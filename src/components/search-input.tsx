import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export const SearchInput = () => {
  return (
    <div
      tabIndex={0}
      className="p-1 bg-gray-100 rounded-full flex items-center justify-between px-4 ring-2 ring-transparent focus-within:ring-2 focus-within:ring-primary transition-all duration-300 border"
    >
      <SearchIcon size={18} className="text-primary" />
      <Input
        className="placeholder:font-normal placeholder:text-[#8A8E85] text-zinc-600 bg-transparent border-none ring-0 ring-transparent ring-offset-transparent focus-visible:ring-transparent"
        placeholder="O que você procura..."
      />
    </div>
  );
};
