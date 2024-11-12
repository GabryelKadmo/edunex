import { CustomIconType } from '@/types/custom-icon';
import React from 'react';

const CursoIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  (
    {
      fill = "#80868B",
      variant = 'outline',
      width = 24,
      height = 24,
      className,
      ...props
    },
    ref
  ) => {
    if (variant === 'solid') {
      return (
        <svg
          ref={ref}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 9.5V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V9.5H2ZM2 8H22V6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V8ZM19 5C19 5.55228 18.5523 6 18 6C17.4477 6 17 5.55228 17 5C17 4.44772 17.4477 4 18 4C18.5523 4 19 4.44772 19 5ZM14 6C14.5523 6 15 5.55228 15 5C15 4.44772 14.5523 4 14 4C13.4477 4 13 4.44772 13 5C13 5.55228 13.4477 6 14 6Z"
            fill={fill}
          />
        </svg>
      );
    }

    // Variante 'outline'
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
          <ellipse
            cx="12"
            cy="3.33329"
            rx="0.666667"
            ry="0.666667"
            fill={fill}
          />
          <ellipse
            cx="9.33335"
            cy="3.33329"
            rx="0.666667"
            ry="0.666667"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_89_1451">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

CursoIcon.displayName = 'CursoIcon';

export default CursoIcon;