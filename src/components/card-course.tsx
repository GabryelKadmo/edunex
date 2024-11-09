import Image from "next/image";
import { Badge } from "./ui/badge";
import ClockIcon from "./icons/clock-icon";
import FlagIcon from "./icons/flag-icon";


export const CardCourse = () => {
  return ( 
    <div className="w-64 p-4 bg-white rounded-2xl text-gray-700 whitespace-normal">
      <div className="w-56 h-52 overflow-hidden relative rounded-2xl">
        <Image alt="sa" src={"/image-teste.png"} fill objectFit="cover"/>
      </div>
      <h3 className="font-semibold text-base mt-4 w-full line-clamp-2 overflow-hidden text-ellipsis">
        Atendimento ao Público ssadsadassadsadsd ssadsadassadsadsd
      </h3>
      <p className="text-sm mt-2 w-full line-clamp-2 overflow-hidden text-ellipsis text-gray-500">O objetivo deste curso é apresentar noções de atendimento, suas diferentes formas e técnicas</p>
      <div className="mt-3 w-full flex items-center justify-between">
        <Badge className="bg-primary-50 text-primary font-medium">Evolução</Badge>
        <div className="flex items-center gap-0.5">
          <ClockIcon width={18} height={18}/>
          <span className="text-xs font-medium">10h</span>
        </div>
        <div className="flex items-center gap-0.5">
          <FlagIcon width={18} height={18}/>
          <span className="text-xs font-medium">Iniciante</span>
        </div>
      </div>
    </div>
   );
}
 