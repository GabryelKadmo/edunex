import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

const CursoIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  ({ fill = "#80868B", variant = 'outline', width = 16, height = 16, className, ...props }, ref) => {

    if (variant === 'solid') {
      return (
        <svg 
          ref={ref}
          width={width} 
          height={height} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={className}
          {...props}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M1.33331 5.33337H14.6666M1.33331 4.00004V12C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12V4.00004C14.6666 2.52728 13.4727 1.33337 12 1.33337H3.99998C2.52722 1.33337 1.33331 2.52728 1.33331 4.00004Z" 
            fill={fill}
          />
          <ellipse cx="12" cy="3.33329" rx="0.666667" ry="0.666667" fill={fill} />
          <ellipse cx="9.33335" cy="3.33329" rx="0.666667" ry="0.666667" fill={fill} />
        </svg>
      );
    }

    // Renderiza o ícone na variante outline
    return (
      <svg 
        ref={ref}
        width={width} 
        height={height} 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        {...props}
      >
        <g clipPath="url(#clip0_89_1451)">
          <path 
            d="M1.33331 5.33337H14.6666M1.33331 4.00004V12C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12V4.00004C14.6666 2.52728 13.4727 1.33337 12 1.33337H3.99998C2.52722 1.33337 1.33331 2.52728 1.33331 4.00004Z" 
            stroke={fill} 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <ellipse cx="12" cy="3.33329" rx="0.666667" ry="0.666667" fill={fill} />
          <ellipse cx="9.33335" cy="3.33329" rx="0.666667" ry="0.666667" fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0_89_1451">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    );
  }
);

CursoIcon.displayName = 'CursoIcon';

export default CursoIcon;