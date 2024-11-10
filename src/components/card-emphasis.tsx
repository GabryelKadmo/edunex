    import React from 'react';
    import { Material } from '../types/material';

    type Props = {
      data: Material;
    }

    export const CardEmphasis = ({ data }: Props) => {
      return (
        <div
          className="w-full overflow-hidden h-full max-h-[450px] rounded-2xl bg-cover bg-center flex flex-col justify-end text-white p-5 box-border relative"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent"></div>
          <h2 className="text-2xl font-bold relative">{data.title}</h2>
          <p className="text-lg relative">{data.type}</p>
        </div>    );
    };