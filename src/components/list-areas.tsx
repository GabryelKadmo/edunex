import { areas } from "@/data/areas";
import Image from "next/image";

export const ListAreas = () => {
  
  return ( 
    <div className="grid grid-cols-4 gap-5 ">
      {areas.filter(area => area.id !== 9).map((area) => (
      <div key={area.id} className="text-center">
        <div className="bg-gray-100 rounded-2xl h-[72px] flex justify-center items-center">
        <Image src={area.icon} alt={area.name} width={28} height={28} />
        </div>
        <span className="text-xs text-gray-600 leading-none">{area.name}</span>
      </div>
      ))}
    </div>
   );
}
 
