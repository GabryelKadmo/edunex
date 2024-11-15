import Image from "next/image";
import { Badge } from "./ui/badge";
import ClockIcon from "./icons/clock-icon";
import FlagIcon from "./icons/flag-icon";
import { Course } from "@/types/course";
import Link from "next/link";
import { createSlug } from "@/utils/format-string";
import { Material } from "@/types/material";
import CertificateIcon from "./icons/certificate-icon";

type Props = {
  data: Course | Material;
};

export const CardItem = ({ data }: Props) => {
  const slug = createSlug(data.title);
  if ("category" in data) {
    return (
      <Link
        href={`/cursos/${slug}`}
        className="w-full min-w-[320px] lg:min-w-full h-[400px] md:w-full p-4 bg-white rounded-2xl text-gray-700 border border-transparent whitespace-normal flex flex-col justify-between transition duration-300 lg:hover:border-gray-200 lg:hover:bg-primary-50"
      >
        <div>
          <div className="w-full h-[220px] overflow-hidden relative rounded-2xl">
            <Image alt={data.title} src={data.image || "/bg-hero.jpg"} fill className="object-cover" />
            {data.hasCertificate && (
            <Badge className="py-1.5 text-sm absolute font-medium gap-2 bottom-5 right-5 bg-primary">
              <CertificateIcon />
              Certificado
            </Badge>
            )}
          </div>
          <h3 className="font-semibold text-base mt-4 w-full line-clamp-2 overflow-hidden text-ellipsis">
            {data.title}
          </h3>
          <p className="text-sm mt-2 w-full line-clamp-2 overflow-hidden text-ellipsis text-gray-500">
            {" "}
            {data.description}{" "}
          </p>
        </div>
        <div className="mt-3 w-full flex items-center justify-between">
          <Badge className="text-sm bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
            {data.category.area.name}
          </Badge>
          <div className="flex items-center gap-0.5">
            <ClockIcon width={18} height={18} />
            <span className="text-sm font-medium">{data.duration}h</span>
          </div>
          <div className="flex items-center gap-0.5">
            <FlagIcon width={18} height={18} />
            <span className="text-sm font-medium">{data.level}</span>
          </div>
        </div>
      </Link>
    );
  }

  if ("type" in data) {
    return (
      <Link
        href={`/materiais/${slug}`}
        className="w-full min-w-[320px] lg:min-w-full h-[400px] md:w-full p-4 bg-white rounded-2xl text-gray-700 border border-transparent whitespace-normal flex flex-col justify-between transition duration-300 lg:hover:border-gray-200 lg:hover:bg-primary-50"
      >
        <div>
          <div className="w-full h-52 overflow-hidden relative rounded-2xl">
            <Image alt="sa" src={data.image} fill className="object-cover" />
          </div>
          <h3 className="font-semibold text-base mt-4 w-full line-clamp-2 overflow-hidden text-ellipsis">
            {data.title}
          </h3>
          <p className="text-sm mt-2 w-full line-clamp-2 overflow-hidden text-ellipsis text-gray-500">
            {" "}
            {data.description}{" "}
          </p>
        </div>
        <div className="mt-3 w-full flex items-center justify-between">
          <Badge className="text-sm bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">
            {data.type}
          </Badge>
          <div className="flex items-center gap-0.5">
            <span className="text-sm text-neutral-500">por</span>
            <span className="text-sm font-medium text-neutral-500">
              {data.author}h
            </span>
          </div>
        </div>
      </Link>
    );
  }
};
