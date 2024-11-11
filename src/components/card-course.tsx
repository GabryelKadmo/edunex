import Image from "next/image";
import { Badge } from "./ui/badge";
import ClockIcon from "./icons/clock-icon";
import FlagIcon from "./icons/flag-icon";
import { Course } from "@/types/course";
import Link from "next/link";
import { createSlug } from "@/utils/format-string";

type Props = {
  data: Course;
};

export const CardCourse = ({ data }: Props) => {
  const slug = createSlug(data.title);
  return ( 
    <Link href={`/cursos/${slug}`}  className="w-full min-w-[320px] lg:min-w-full h-[390px] md:w-full p-4 bg-white rounded-2xl text-gray-700 whitespace-normal">
      <div className="w-full h-52 overflow-hidden relative rounded-2xl">
        <Image alt="sa" src={data.image} fill className="object-cover"/>
      </div>
      <h3 className="font-semibold text-base mt-4 w-full line-clamp-2 overflow-hidden text-ellipsis">
        {data.title}
      </h3>
      <p className="text-sm mt-2 w-full line-clamp-2 overflow-hidden text-ellipsis text-gray-500"> {data.description} </p>
      <div className="mt-3 w-full flex items-center justify-between">
        <Badge className="bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">{data.category.area.name}</Badge>
        <div className="flex items-center gap-0.5">
          <ClockIcon width={18} height={18}/>
          <span className="text-xs font-medium">{data.duration}h</span>
        </div>
        <div className="flex items-center gap-0.5">
          <FlagIcon width={18} height={18}/>
          <span className="text-xs font-medium">{data.level}</span>
        </div>
      </div>
    </Link>
   );
}
 