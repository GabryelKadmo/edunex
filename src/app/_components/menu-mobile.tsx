"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import HomeIcon from "@/components/icons/home-icon";
import { CustomIconType } from "@/types/custom-icon";
import SearchIcon from "@/components/icons/search-icon";
import DicasIcon from "@/components/icons/dicas-icon";

import CursoIcon from "@/components/icons/curso-icon";

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
    icon: SearchIcon,
    href: "/explore",
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
];

export const MenuMobile = () => {
  const pathname = usePathname();

  return (
    <div className="px-5 py-3 bg-white w-full">
      <ul className="flex items-center justify-between">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index} className="relative">
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-primary-50 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Link
                href={item.href}
                className={`flex items-center gap-3 py-3 relative z-10 ${isActive ? " text-primary px-4 sm:px-6" : "px-1 text-neutral-600"} `}
              >
                {isActive && (
                  <item.icon
                    variant="solid"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mb-1"
                  />
                )}
                <span
                  className={isActive ? "text-primary font-medium" : "text-neutral-600"}
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