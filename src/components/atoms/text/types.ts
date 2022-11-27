type weight = 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black';
type size = 'sm' | 'md' | 'lg' | 'xl';
type color = 'white' | 'gray' | 'darkgray' | 'black' | 'red';
type typeAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type TextProps = {
	children: string;
	weight?: weight;
	size?: size;
	color?: color;
	as?: typeAs;
};

export type { TextProps, color, size, weight, typeAs };
