import type { Metadata } from 'next';
import { SUSE_Mono, Sixtyfour, Ubuntu_Mono } from 'next/font/google';
import './globals.css';

const ubuntuMono = Ubuntu_Mono({
  variable: '--font-ubuntu-mono',
  subsets: ['latin'],
  adjustFontFallback: false,
  display: 'swap',
  weight: ['400', '700']
})

const suseMono = SUSE_Mono({
  variable: '--font-suse-mono',
  subsets: ['latin'],
  adjustFontFallback: false,
  display: 'swap'
});

const sixtyFour = Sixtyfour({
  variable: '--font-sixtyfour',
  subsets: ['latin'],
  adjustFontFallback: false,
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Davis Sawali',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${suseMono.variable} ${sixtyFour.variable} ${ubuntuMono.variable} scroll-smooth`}>
      <body>
        
        {children}
      </body>
    </html>
  );
}
