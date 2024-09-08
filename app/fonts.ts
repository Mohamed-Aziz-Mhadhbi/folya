import localFont from 'next/font/local';
import { Roboto, Oswald } from 'next/font/google';

/******************************************/
/*              ROBOTO                    */
/******************************************/

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Regular, Medium, Bold
    style: ['normal', 'italic'],
    variable: '--font-roboto',
});

/******************************************/
/*              OSWALD                    */
/******************************************/

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal'],
    variable: '--font-oswald',
});

/******************************************/
/*               WEB FONTS                */
/******************************************/

const faSolid = localFont({
    src: [
        {
            path: '/fonts/webfonts/fa-solid-900.woff2',
            weight: '900', // Heavy weight for solid icons
            style: 'normal',
        },
    ],
    variable: '--font-fa-solid',
});

const faBrands = localFont({
    src: [
        {
            path: '/fonts/webfonts/fa-brands-400.woff2',
            weight: '400', // Regular weight for brand icons
            style: 'normal',
        },
    ],
    variable: '--font-fa-brands',
});

export { roboto, oswald, faSolid, faBrands };
