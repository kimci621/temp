import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer/footer';
import { ThemeProvider } from '@/lib/context/theme-context';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import '@/styles/features.css';

export const metadata: Metadata = {
  title: 'Автоматизация HR и подбора персонала — Huntlee',
  description:
    'Программа Huntlee — автоматизация HR и подбора персонала. Упростите рекрутинг, сократите время найма и повысьте эффективность HR-процессов.',
  keywords:
    'автоматизация HR, программа для подбора персонала, HR система, рекрутинг сервис, программа для рекрутера, цифровизация HR, CRM для HR',
};

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--main-font',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
    >
      <body className={`${manrope.variable}`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
