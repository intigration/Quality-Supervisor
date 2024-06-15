import { component$ } from "@builder.io/qwik";
import colors from 'tailwindcss/colors';

const getImagePath = (image: string) => {

}

const makeFillColor = (props: IconProps) => {
    const isColorKey = (color: any): color is keyof typeof colors => color in colors;
  
    let colorValue = 'currentcolor';
    if (props.color && isColorKey(props.color)) {
      const colorObject = colors[props.color];
      if (colorObject[400]) {
        colorValue = colorObject[400];
      }
    }
    return colorValue;
  };
  
  
  interface IconProps {
    icon: string;
    href: string;
    color?: string;
    class?: string;
    width?: number;
    height?: number;
  }
  
  const ImageComponent = component$((props: IconProps) => {
    const fillColor = makeFillColor(props);
    const svgStyle = { fill: fillColor };
    const { vb, path } = getImagePath(props.icon);
    const svgClass = props.class || '';
    const width = props.width || 80;
    const height = props.height || props.width || 50;
  
    return (
      <img class={svgClass} href={path} style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox={vb} width={width} height={height}>
      </img>
    );
  });
  
  export default ImageComponent;