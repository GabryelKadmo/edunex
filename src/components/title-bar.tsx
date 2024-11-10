"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  title: string;
}
export const TitleBar = ({title}: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };


  return ( 
    <div className="flex gap-4 items-center">
      <Button size={"icon"} variant={"ghost"} className="border" onClick={handleBack}><ChevronLeft  className="w-[100px] h-[100px]"/></Button>
      <h1 className="font-semibold text-base text-neutral-800">{title}</h1>
    </div>
  );
}