import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer/footer';
import { ThemeProvider } from '@/lib/context/theme-context';
import type { Metadata } from 'next';
import { manrope, montserrat } from '@/assets/fonts';
import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import '@/styles/features.css';
import 'lenis/dist/lenis.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Автоматизация HR и подбора персонала — Huntlee',
  description:
    'Программа Huntlee — автоматизация HR и подбора персонала. Упростите рекрутинг, сократите время найма и повысьте эффективность HR-процессов.',
  keywords:
    'автоматизация HR, программа для подбора персонала, HR система, рекрутинг сервис, программа для рекрутера, цифровизация HR, CRM для HR',
};

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
      <body className={`${manrope.variable} ${montserrat.variable}`}>
        <ThemeProvider>
          <Header />

          <main className="flex-grow">{children}</main>
          <Toaster />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
