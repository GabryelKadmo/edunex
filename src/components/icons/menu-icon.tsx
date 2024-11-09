import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

// Use `React.forwardRef` para criar o componente com suporte a ref
const MenuIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  ({ fill = "#5F6368", width = 30, height = 30, className, ...props }, ref) => {

    return (
      <svg 
        ref={ref}
        width={width} 
        height={height} 
        viewBox="0 0 30 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        {...props}
      >
        <path 
          opacity="0.4" 
          d="M1.92285 4.51868C1.92285 3.13796 3.04214 2.01868 4.42285 2.01868H10.577C11.9577 2.01868 13.077 3.13796 13.077 4.51868V10.6728C13.077 12.0536 11.9577 13.1728 10.577 13.1728H4.42285C3.04214 13.1728 1.92285 12.0536 1.92285 10.6728V4.51868Z" 
          fill={fill}
        />
        <path 
          opacity="0.4" 
          d="M16.827 19.4229C16.827 18.0421 17.9463 16.9229 19.327 16.9229H25.4812C26.8619 16.9229 27.9812 18.0421 27.9812 19.4229V25.577C27.9812 26.9577 26.8619 28.077 25.4812 28.077H19.327C17.9463 28.077 16.827 26.9577 16.827 25.577V19.4229Z" 
          fill={fill}
        />
        <ellipse 
          cx="22.4041" 
          cy="7.59576" 
          rx="5.57708" 
          ry="5.57708" 
          fill={fill}
        />
        <ellipse 
          cx="7.49993" 
          cy="22.4999" 
          rx="5.57708" 
          ry="5.57708" 
          fill={fill}
        />
      </svg>
    );
  }
);

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;