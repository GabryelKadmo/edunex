import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

const CurriculoIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  ({ fill = "#80868B", variant = 'outline', width = 14, height = 16, className, ...props }, ref) => {

    if (variant === 'solid') {
      return (
        <svg 
          ref={ref}
          width={width} 
          height={height} 
          viewBox="0 0 14 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={className}
          {...props}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5.5 0.5H8.5C9.32843 0.5 10 1.17157 10 2C10 2.82843 9.32843 3.5 8.5 3.5H5.5C4.67157 3.5 4 2.82843 4 2C4 1.17157 4.67157 0.5 5.5 0.5ZM2.88049 2.02271C2.87685 2.07722 2.875 2.13223 2.875 2.18767C2.875 3.53387 3.96631 4.62517 5.3125 4.62517H8.6875C10.0337 4.62517 11.125 3.53387 11.125 2.18767C11.125 2.13223 11.1231 2.07723 11.1195 2.02271C12.602 2.2048 13.75 3.46843 13.75 5.00017V12.5002C13.75 14.157 12.4069 15.5002 10.75 15.5002H3.25C1.59315 15.5002 0.25 14.157 0.25 12.5002V5.00017C0.25 3.46843 1.39797 2.2048 2.88049 2.02271ZM3.4375 6.50018C3.4375 6.18952 3.68934 5.93768 4 5.93768H10C10.3107 5.93768 10.5625 6.18952 10.5625 6.50018C10.5625 6.81084 10.3107 7.06268 10 7.06268H4C3.68934 7.06268 3.4375 6.81084 3.4375 6.50018ZM4 8.93768C3.68934 8.93768 3.4375 9.18952 3.4375 9.50018C3.4375 9.81084 3.68934 10.0627 4 10.0627H10C10.3107 10.0627 10.5625 9.81084 10.5625 9.50018C10.5625 9.18952 10.3107 8.93768 10 8.93768H4ZM3.4375 12.5002C3.4375 12.1895 3.68934 11.9377 4 11.9377H7C7.31066 11.9377 7.5625 12.1895 7.5625 12.5002C7.5625 12.8108 7.31066 13.0627 7 13.0627H4C3.68934 13.0627 3.4375 12.8108 3.4375 12.5002Z" 
            fill={fill}
          />
        </svg>
      );
    }

    // Renderiza o ícone na variante outline
    return (
      <svg 
        ref={ref}
        width={width} 
        height={height} 
        viewBox="0 0 16 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        {...props}
      >
        <path 
          d="M5 7.5H11M5 10.5H11M5 13.5H8M5 3C5 3.82843 5.67157 4.5 6.5 4.5H9.5C10.3284 4.5 11 3.82843 11 3M5 3C5 2.17157 5.67157 1.5 6.5 1.5H9.5C10.3284 1.5 11 2.17157 11 3M5 3H4.25C2.59315 3 1.25 4.34315 1.25 6V13.5C1.25 15.1569 2.59315 16.5 4.25 16.5H11.75C13.4069 16.5 14.75 15.1569 14.75 13.5V6C14.75 4.34315 13.4069 3 11.75 3H11" 
          stroke={fill} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

CurriculoIcon.displayName = 'CurriculoIcon';

export default CurriculoIcon;