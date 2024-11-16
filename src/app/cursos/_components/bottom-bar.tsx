"use client";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BottomBar = ({ data, title }: { data?: Course, title?: string }) => {

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="lg:hidden fixed z-50 bottom-0 left-0 px-5 py-3 bg-white w-full flex justify-between items-center shadow">
      <Button
        className="text-neutral-600 bg-primary-50 px-7 py-3.5 rounded-full hover:bg-primary-50 lg:hover:text-primary-50"
        onClick={handleBack}
      >
        Voltar
      </Button>
      <Link
        href={data?.link || "/cursos"}
        target={data?.link ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="bg-primary text-primary-50 px-10 py-3.5 rounded-full"
      >
        {title ?? "Ir para o Curso"}
      </Link>
    </div>
  );
};

export default BottomBar;
