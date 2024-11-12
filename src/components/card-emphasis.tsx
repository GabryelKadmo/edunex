    import React from 'react';
    import { Material } from '../types/material';
import Link from 'next/link';
import { createSlug } from '@/utils/format-string';

    type Props = {
      data: Material;
    }

    export const CardEmphasis = ({ data }: Props) => {
      const slug = createSlug(data.title);
      return (
        <Link
          href={`/materiais/${slug}`}
          className="w-full overflow-hidden h-full max-h-[500px] rounded-2xl bg-cover bg-center flex flex-col justify-end text-white p-5 box-border relative"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent"></div>
          <h2 className="text-2xl font-bold relative">{data.title}</h2>
          <p className="text-lg relative">{data.type}</p>
        </Link>    );
    };