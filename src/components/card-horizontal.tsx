import Image from "next/image";
import { Badge } from "./ui/badge";

export const CardHorizontal = () => {
  return ( 
    <div className="w-full flex gap-4 items-center">
      <div className=" w-full max-w-[120px] h-[120px] sm:max-w-[160px] sm:h-[160px] lg:max-w-[120px] lg:h-[120px] overflow-hidden relative rounded-2xl">
        <Image alt="sa" src={"/image-teste.png"} fill objectFit="cover"/>
      </div>
      <div>
        <p className="text-base font-medium text-gray-800 sm:text-xl lg:text-base">Como Melhorar a sua Produtividade no Trabalho</p>
        <div className="mt-3 flex gap-4 items-center">
        <Badge className="bg-primary-50 text-primary font-medium hover:bg-primary-50 hover:text-primary">Evolução</Badge>
        <span className="text-xs text-gray-500 font-medium">Por Alberto Junior</span>
        </div>
      </div>
    </div>
   );
}
 