/*
  External dependencies
*/
import type { Metadata } from 'next'

/*
Internal dependencies
*/
import { favorit } from './fonts'

import './globals.css'
import Nav from '../components/nav';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: {
		default: 'Faiz Ichsan Jaya',
    	template: '%s · Faiz Ichsan Jaya',
  },
  description: 'A portfolio website',
  openGraph: {
    title: 'Faiz Ichsan Jaya',
    description: 'A portfolio website',
    url: 'https://fukuo.design',
    siteName: 'fukuo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ['Fukuo', 'Frontend Developer', 'Tumblr'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={favorit.className}>
        <div className="relative w-full min-h-screen">
          <Nav />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
