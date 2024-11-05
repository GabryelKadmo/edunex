"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@/components/icons/home-icon";
import { CustomIconType } from "@/types/custom-icon";
import Image from "next/image";
import CursoIcon from "@/components/icons/curso-icon";
import DicasIcon from "@/components/icons/dicas-icon";
import CurriculoIcon from "@/components/icons/curriculo-icon";

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
    text: "Explore",
    icon: CursoIcon,
    href: "/explore",
    active: true,
  },
  {
    text: "Dicas",
    icon: DicasIcon,
    href: "/dicas",
    active: true,
  },
  {
    text: "Currículo",
    icon: CurriculoIcon,
    href: "/gerador-de-curriculo",
    active: true,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="px-6 bg-white w-full h-full border-r border-black/10">
      <div className="py-6 border-b border-primary-50 flex justify-center">
        <Image alt="Logo Edunex" src={"/logo.svg"} height={30} width={190}/>
      </div>
      <ul className="py-6 space-y-2">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index} className="relative">
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 relative z-10 ${isActive ? "bg-primary-50 rounded-md text-primary" : "text-gray-500"} `}
              >
                <item.icon
                  variant={"outline"}
                  width={18}
                  height={18}
                  fill="currentColor"
                  className="mb-1"
                />
                <span
                  className={isActive ? "text-primary font-medium text-sm" : "text-sm font-medium text-gray-500"}
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