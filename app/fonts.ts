// fonts.ts
import {
    Roboto,
    Oswald
} from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Specify weights to load
});

export const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Specify weights to load
});