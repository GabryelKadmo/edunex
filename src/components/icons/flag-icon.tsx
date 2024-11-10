import React from 'react';
import { CustomIconType } from '@/types/custom-icon';

// Usa `React.forwardRef` para criar o componente com suporte a ref
const FlagIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  (
    { fill = "#5F6368", width = 15, height = 15, className, ...props },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          opacity="0.4"
          d="M2.58472 11.4674V2.50022C2.58472 1.86085 3.10303 1.34253 3.74241 1.34253H10.6886C11.3279 1.34253 11.8463 1.86085 11.8463 2.50022L11.8463 11.4674C11.8463 12.1906 11.0139 12.5968 10.4438 12.1519L7.92776 9.86123C7.50912 9.53449 6.92185 9.53449 6.50321 9.86123L3.98719 12.1519C3.41708 12.5968 2.58472 12.1906 2.58472 11.4674Z"
          fill={fill}
        />
        <path
          d="M3.74241 1.34253H10.6886C11.3279 1.34253 11.8463 1.86085 11.8463 2.50022V4.23676H2.58472V2.50022C2.58472 1.86085 3.10303 1.34253 3.74241 1.34253Z"
          fill={fill}
        />
      </svg>
    );
  }
);

FlagIcon.displayName = 'FlagIcon';

export default FlagIcon;