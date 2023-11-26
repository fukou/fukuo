
import { PT_Serif, Lora } from 'next/font/google'
import localFont from 'next/font/local'

export const favorit = localFont({
    src: [
      {
        path: '../public/font/favorit-85-cf2f6136.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../public/font/favorit-medium-fbc7316f.woff2',
        weight: '600',
        style: 'bold',
      },
    ],
  });
  
  export const ptSerif = PT_Serif({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

  export const lora = Lora({
    weight: ['400','500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });