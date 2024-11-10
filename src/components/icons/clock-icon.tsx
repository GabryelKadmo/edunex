import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

// Usa `React.forwardRef` para criar o componente com suporte a ref
const ClockIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  ({ fill = "#5F6368", width = 15, height = 15, className, ...props }, ref) => {

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
        <circle opacity="0.4" cx="7.5807" cy="7.13099" r="5.78846" fill={fill}/>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.41643 4.3938C7.6562 4.3938 7.85057 4.58817 7.85057 4.82793V7.40926L9.29026 7.88915C9.51772 7.96498 9.64065 8.21083 9.56483 8.4383C9.48901 8.66576 9.24315 8.78869 9.01569 8.71287L7.27915 8.13402C7.10187 8.07493 6.9823 7.90903 6.9823 7.72216V4.82793C6.9823 4.58817 7.17667 4.3938 7.41643 4.3938Z"
          fill={fill}
        />
      </svg>
    );
  }
);

ClockIcon.displayName = 'ClockIcon';

export default ClockIcon;