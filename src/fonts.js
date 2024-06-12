import { Inter, Nanum_Pen_Script, Roboto_Slab } from 'next/font/google';

const titleFont = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: ['400']
});

const displayFont = Inter({
  subsets: ['latin'],
  weight: ['400']
});

const monospaceFont = Roboto_Slab({
  subsets: ['latin']
});

const fonts = {
  title: titleFont,
  display: displayFont,
  monospace: monospaceFont
};

export default fonts;
export { fonts, titleFont, displayFont, monospaceFont };
