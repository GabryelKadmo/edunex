import { Button } from "@/components/ui/button";
import CurriculoImage from "./assets/images/ModeloCurriculo.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function GeradorDeCurriculoPage() {

  return (
    <>
      <div className="flex justify-between px-8 space-x-8">
        <div className="flex flex-col justify-center items-start max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Gerador de Currículo Profissional
          </h1>
          <p className="text-lg text-start text-gray-600 mb-8">
            O Gerador de Currículos do Edunex foi projetado para tornar a criação do seu currículo uma tarefa
            simples, rápida e eficaz. Com ferramentas intuitivas, você pode personalizar cada seção, destacando suas habilidades, experiências e conquistas.
            Em poucos passos, tenha um currículo profissional e visualmente atraente, pronto para impressionar
            recrutadores e abrir portas no mercado de trabalho.
          </p>
          <Button className="px-6 w-full py-3 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary-600">
            Criar Currículo Agora
          </Button>
        </div>

        <div className="hidden md:block">
          <Image src={CurriculoImage} alt="Modelo Curriculo" className="object-contain" />
        </div>
      </div>

      <Separator className="my-8 border-t border-primary-500" />

      <div className="px-8 space-y-4">
        <p className="text-lg text-start text-gray-600 mb-8">
          Criamos nosso gerador de currículos com um propósito: ajudar você a encontrar emprego mais rapidamente.
          Nossos currículos são otimizados para softwares de recrutamento e contam com um processo de preenchimento que guia você em cada etapa.
        </p>
      </div>
    </>
  );
}
