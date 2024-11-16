"use client";

import { useState } from "react";
import { CardEmphasis } from "@/components/card-emphasis";
import { CardHorizontal } from "@/components/card-horizontal";
import { Material } from "@/types/material";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  materials: Material[];
}

export default function AreaMateriais({ materials }: Props) {

  return (
    <>
      <div className="h-[700px] lg:h-[500px] grid grid-cols-1 lg:grid-cols-7 gap-4 mt-8">
        {materials.slice(0, 1).map((material) => (
          <div key={material.id} className="lg:col-span-4 lg:row-span-2">
            <CardEmphasis data={material} />
          </div>
        ))}
        {materials.slice(2, 4).map((material) => (
          <div key={material.id} className="lg:col-span-3">
            <CardEmphasis data={material} />
          </div>
        ))}
      </div>
      <div className="mt-16 w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
        {materials.slice(3).map((material) => (
          <div key={material.id}>
            <CardHorizontal data={material} />
          </div>
        ))}
      </div>

    </>
  );
}
