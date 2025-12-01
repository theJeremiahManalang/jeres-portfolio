// app/fonts.ts

import { Fira_Sans, PT_Serif, Roboto_Condensed, Montserrat, Bebas_Neue } from 'next/font/google';


// 1. Montserrat (For body text, regular content)
// Use variable: '--font-body'
export const bodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify the weights you'll actually use
  display: 'swap',
  variable: '--font-body', // The CSS variable name for body text
});

export const titleFont = Fira_Sans({
  subsets: ['latin'],
  weight: ['600', '800', '900'], // Specify the weights you'll actually use
  display: 'swap',
  variable: '--font-title', // The CSS variable name for body text
});

export const subtitleFont = PT_Serif({
  subsets: ['latin'],
  weight: ['400'], // Specify the weights you'll actually use
  display: 'swap',
  variable: '--font-subtitle', // The CSS variable name for body text
});

export const mainFont = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you'll actually use
  display: 'swap',
  variable: '--font-main', // The CSS variable name for body text
});


// 2. Bebas Neue (For headings, display titles)
// Bebas Neue is a non-variable font, so you must specify the weight.
// It is usually only available in '400' (Regular).
// Use variable: '--font-heading'
export const headingFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // Bebas Neue is often a single-weight font
  display: 'swap',
  variable: '--font-heading', // The CSS variable name for headings
});