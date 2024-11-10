import Image from "next/image";
import { Badge } from "./ui/badge";
import { Material } from "@/types/material";

type Props = {
  data: Material;
};

export const CardHorizontal = ({ data }: Props) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[120px] lg:h-[120px] overflow-hidden relative rounded-2xl flex-shrink-0">
      <Image alt="sa" src={data.image} fill objectFit="cover" />
      </div>
      <div className="flex-1">
      <p className="text-base font-medium text-gray-800 sm:text-xl lg:text-base">
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
    </div>
  );
};
