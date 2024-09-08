// fonts.ts
import { Roboto, Oswald } from 'next/font/google';

/******************************************/
/*              ROBOTO                    */
/******************************************/

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  style: ['normal', 'italic'], // Define both normal and italic styles
  variable: '--font-roboto', // CSS variable for Roboto
});

/******************************************/
/*              OSWALD                    */
/******************************************/

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  style: ['normal'], // Define both normal and italic styles
  variable: '--font-oswald', // CSS variable for Oswald
});

export { roboto, oswald };
