import Image from "next/image";
import { Badge } from "./ui/badge";
import { Material } from "@/types/material";
import { createSlug } from "@/utils/format-string";
import Link from "next/link";

type Props = {
  data: Material;
};

export const CardHorizontal = ({ data }: Props) => {
  const slug = createSlug(data.title);
  return (
    <Link href={`/materiais/${slug}`} className="w-full flex gap-4 items-center">
      <div className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[120px] lg:h-[120px] overflow-hidden relative rounded-2xl flex-shrink-0">
      <Image alt="sa" src={data.image} fill className="object-cover" />
      </div>
      <div className="flex-1">
      <p className="text-base font-medium text-gray-800 sm:text-xl lg:text-base line-clamp-2">
        {data.title}
      </p>
      <p className="text-sm text-gray-600 line-clamp-2">
        {data.description}
      </p>
      <div className="mt-3 flex gap-4 items-center">
        <Badge className="bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
        {data.type}
        </Badge>
        <span className="text-xs text-gray-500 font-medium">
          Por {data.author}
        </span>
      </div>
      </div>
    </Link>
  );
};
