import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

const DicasIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  ({ fill = "#80868B", variant = 'outline', width = 18, height = 16, className, ...props }, ref) => {

    if (variant === 'solid') {
      return (
        <svg 
          ref={ref}
          width={width} 
          height={height} 
          viewBox="0 0 18 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={className}
          {...props}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M15 7.25H3M15 7.25C15.8284 7.25 16.5 7.92157 16.5 8.75V11.75C16.5 13.4069 15.1569 14.75 13.5 14.75H4.5C2.84315 14.75 1.5 13.4069 1.5 11.75V8.75C1.5 7.92157 2.17157 7.25 3 7.25M15 7.25V5.75C15 4.92157 14.3284 4.25 13.5 4.25M3 7.25V5.75C3 4.92157 3.67157 4.25 4.5 4.25M13.5 4.25H4.5M13.5 4.25V2.75C13.5 1.92157 12.8284 1.25 12 1.25H6C5.17157 1.25 4.5 1.92157 4.5 2.75V4.25M7.5 9.5H10.5" 
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
        viewBox="0 0 18 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        {...props}
      >
        <path 
          d="M15 7.25H3M15 7.25C15.8284 7.25 16.5 7.92157 16.5 8.75V11.75C16.5 13.4069 15.1569 14.75 13.5 14.75H4.5C2.84315 14.75 1.5 13.4069 1.5 11.75V8.75C1.5 7.92157 2.17157 7.25 3 7.25M15 7.25V5.75C15 4.92157 14.3284 4.25 13.5 4.25M3 7.25V5.75C3 4.92157 3.67157 4.25 4.5 4.25M13.5 4.25H4.5M13.5 4.25V2.75C13.5 1.92157 12.8284 1.25 12 1.25H6C5.17157 1.25 4.5 1.92157 4.5 2.75V4.25M7.5 9.5H10.5" 
          stroke={fill} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

DicasIcon.displayName = 'DicasIcon';

export default DicasIcon;
