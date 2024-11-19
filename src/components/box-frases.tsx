"use client"

import { frases } from "@/data/frases";
import { BackgroundLines } from "./background-lines";
import { useEffect, useState } from "react";

export function BoxFrases() {
  const [fraseAleatoria, setFraseAleatoria] = useState("");

  useEffect(() => {
    const atualizarFrase = () => {
      const frase = frases[Math.floor(Math.random() * frases.length)];
      setFraseAleatoria(frase);
    };

    atualizarFrase(); // Atualiza a frase imediatamente ao montar o componente

    const intervalo = setInterval(atualizarFrase, 12000); // Atualiza a frase a cada 5 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="w-full py-4 px-4 bg-primary-50 rounded-2xl">
      <BackgroundLines className="bg-primary-50  text-center ">
        <h3 className=" bg-clip-text font-semibold text-transparent text-center bg-gradient-to-b from-neutral-700 to-neutral-400 text-2xl mt-4">Inspire-se</h3>
        <p className="text-[18px] text-primary-400 font-semibold mt-5">
          {fraseAleatoria}
        </p>
      </BackgroundLines>
    </div>
  );
}
