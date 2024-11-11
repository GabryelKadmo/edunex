import { members } from "@/data/members";
import Image from "next/image";

const Members = () => {
  return ( 
    <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-5">
      {members.map((member) => (
        <div key={member.id} className="flex flex-col items-center">
          <div className="w-full h-[108px] sm:h-[130px] gap-5 overflow-hidden relative rounded-2xl mb-2">
          <Image alt="sa" src={"/image-perfil.jpg"} fill className="object-cover"/>
          </div>

          <span className="font-semibold text-xs text-neutral-700 text-center">{member.name}</span>
          <span className="text-neutral-700 text-[10px] text-center">{member.position}</span>
        </div>
      ))}
    </div>
   );
}
 
export default Members;