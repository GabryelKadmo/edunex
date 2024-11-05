// Define os props personalizados para os ícones
export interface CustomIconType extends React.SVGProps<SVGSVGElement> {
  variant?: "solid" | "outline"; 
  width?: number;
  height?: number;
  fill?: string;
}