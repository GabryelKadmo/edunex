// components/list-areas.tsx
import { areas } from "@/data/areas";
import Image from "next/image";
import Link from "next/link";

export const ListAreas = () => {
  return (
    <div className="grid grid-cols-4 gap-5 lg:grid-cols-4 xl:grid-cols-8">
      {areas
        .filter((area) => area.id !== 9)
        .map((area) => (
          <Link
            key={area.id}
            href={`/explore?search=${encodeURIComponent(area.name)}`}
            className="text-center cursor-pointer"
          >
            <div className="bg-gray-100 rounded-2xl h-[72px] sm:h-[120px] lg:h-[100px] flex justify-center items-center lg:mb-3">
              <Image
                src={area.icon}
                alt={area.name}
                width={28}
                height={28}
                className="w-7 h-7 sm:w-9 sm:h-9"
              />
            </div>
            <span className="text-xs text-gray-600 leading-none lg:text-sm">
              {area.name}
            </span>
          </Link>
        ))}
    </div>
  );
};