"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import HomeIcon from "@/components/icons/home-icon";
import { CustomIconType } from "@/types/custom-icon";
import SearchIcon from "@/components/icons/search-icon";
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
    icon: SearchIcon,
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

export const MenuMobile = () => {
  const pathname = usePathname();

  return (
    <div className="px-5 py-3 bg-white w-full">
      <ul className="flex justify-between items-center relative">
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
                className={`flex items-center gap-3 px-6 py-4 relative z-10 ${isActive ? " text-primary" : "text-neutral-600"} `}
              >
                {isActive && (
                  <item.icon
                    variant="solid"
                    width={24}
                    height={24}
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