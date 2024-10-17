interface Spacing{
    space_2:number;
    space_4:number;
    space_6:number;
    space_8:number;
    space_10:number;
    space_12:number;
    space_15:number;
    space_16:number;
    space_18:number;
    space_20:number;
    space_24:number;
    space_28:number;
    space_32:number;
    space_36:number;
}

export const SPACING: Spacing = {
    space_2: 2,
    space_4: 4,
    space_6: 6,
    space_8: 8,
    space_10: 10,
    space_12: 12,
    space_15: 15,
    space_16: 16,
    space_18: 18,
    space_20: 20,
    space_24: 24,
    space_28: 28,
    space_32: 32,
    space_36: 36,
};

interface Color{
    Black:string;
    BlackRGB10: string;
    Orange:string;
    OrangeRGB10: string;
    Grey:string;
    DarkGrey:string;
    Yellow:string;
    White:string;
    OrangeRGB75: string;
    OrangeRGB50: string;
    OrangeRGB32: string;
    OrangeRGB15: string;
}

export const COLOR:Color={
    Black: '#000000',
    BlackRGB10: 'rgba(0,0,0,0.1)',
    Orange: '#ff5524',
    OrangeRGB10: 'rgba(225,85,36,0)',
    Grey: '#ff333333',
    DarkGrey: '#0b0b0b',
    Yellow: '#FFFF00',
    White: '#ffffff',
    OrangeRGB75: 'rgba(225,225,225,075)',
    OrangeRGB50: 'rgba(225,225,225,0.50)',
    OrangeRGB32: 'rgba(225,225,225,0.32)',
    OrangeRGB15: 'rgba(225,225,225,0.15)',
}

interface FontFamily{
    popping_black:string,
    popping_bold:string,
    popping_extrabold:string,
    popping_extralight:string,
    popping_light:string,
    popping_medium:string,
    popping_regular:string,
    popping_semibold:string,
    popping_thin:string,
}

export const FONTFAMILY:FontFamily={
    popping_black: 'Popping-Black',
    popping_bold: 'Popping-Bold',
    popping_extrabold: 'Popping-ExtraBold',
    popping_extralight: 'Popping-ExtraLight',
    popping_light: 'Popping-Light',
    popping_medium: 'Popping-Medium',
    popping_regular: 'Popping-Regular',
    popping_semibold: 'Popping-SemiBold',
    popping_thin: 'Popping-Thin',
}

interface FrontSize{
    size_8:number;
    size_10:number;
    size_12:number;
    size_14:number;
    size_16:number;
    size_18:number;
    size_20:number;
    size_24:number;
    size_30:number;
}

export const FRONTSIZE:FrontSize={
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_30: 30,
}
interface BorderRadius{
    radius_8: number;
    radius_10: number;
    radius_12: number;
    radius_14: number;
    radius_16: number;
    radius_18: number;
    radius_20: number;
    radius_24: number;
    radius_30: number;
}

export const  BORDERRADIUS:BorderRadius={
    radius_8: 8,
    radius_10: 10,
    radius_12: 12,
    radius_14: 14,
    radius_16: 16,
    radius_18: 18,
    radius_20: 20,
    radius_24: 24,
    radius_30: 30,
}