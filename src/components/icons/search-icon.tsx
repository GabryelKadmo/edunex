// components/search-icon.tsx
import React from 'react';
import { CustomIconType } from '@/types/custom-icon';

// Use `React.forwardRef` para criar o componente com suporte a ref
const SearchIcon = React.forwardRef<SVGSVGElement, CustomIconType>(
  (
    { fill = "#725DFF", width = 16, height = 16, className, ...props },
    ref
  ) => (
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
        d="M12.8649 7C12.8649 10.2391 10.2391 12.8649 7 12.8649C3.76092 12.8649 1.13513 10.2391 1.13513 7C1.13513 3.76092 3.76092 1.13513 7 1.13513C10.2391 1.13513 12.8649 3.76092 12.8649 7ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM15.5588 15.5588C14.9706 16.1471 14.0169 16.1471 13.4287 15.5588L12 14.1301C12.8316 13.5541 13.5541 12.8316 14.1301 12L15.5588 13.4287C16.1471 14.0169 16.1471 14.9706 15.5588 15.5588Z"
        fill={fill}
      />
    </svg>
  )
);

SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;