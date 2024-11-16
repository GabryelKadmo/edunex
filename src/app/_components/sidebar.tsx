"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@/components/icons/home-icon";
import CursoIcon from "@/components/icons/curso-icon";
import DicasIcon from "@/components/icons/dicas-icon";
// import CurriculoIcon from "@/components/icons/curriculo-icon";
import { CustomIconType } from "@/types/custom-icon";
import Image from "next/image";
import SearchIcon from "@/components/icons/search-icon";

type NavItemType = {
  text: string;
  icon: React.ForwardRefExoticComponent<CustomIconType>;
  href: string;
  active?: boolean;
};

const navItems: NavItemType[] = [
  {
    text: "Início",
    icon: HomeIcon,
    href: "/",
    active: true,
  },
  {
    text: "Cursos",
    icon: CursoIcon,
    href: "/cursos",
    active: true,
  },
  {
    text: "Materiais",
    icon: DicasIcon,
    href: "/materiais",
    active: true,
  },
  {
    text: "Explore",
    icon: SearchIcon,
    href: "/explore",
    active: true,
  },
  // {
  //   text: "Currículo",
  //   icon: CurriculoIcon,
  //   href: "/gerador-de-curriculo",
  //   active: true,
  // },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-white w-full h-full ">
      <div className="py-6 border-b border-primary-50 flex justify-center">
       <Link href="/"> 
        <Image alt="Logo Edunex" src={"/logo.svg"} height={30} width={190} />
       </Link>
      </div>
      <ul className="py-6 space-y-2">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index} className="relative">
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md relative z-10 ${
                  isActive
                    ? "bg-primary-50 text-primary"
                    : "lg:hover:bg-primary-300 lg:hover:text-white text-gray-500"
                }`}
              >
                <item.icon
                  variant={"outline"}
                  width={18}
                  height={18}
                  fill="currentColor"
                  className={`mb-1 ${
                    isActive ? "text-primary" : "lg:hover:text-white"
                  }`}
                />
                <span
                  className={`text-sm font-medium lg:hover:text-white${
                    isActive ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {item.text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};