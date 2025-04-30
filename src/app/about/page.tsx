import { AboutPageFirstSection } from '@/components/ui/sections/about/first';
import { AboutPageSecondSection } from '@/components/ui/sections/about/second';
import { AboutPageThirdSection } from '@/components/ui/sections/about/third';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huntlee | О нас',
  description: 'Ваша система найма под любые задачи',
};

export default function AboutPage() {
  return (
    <div className="container-full mx-auto mb-[64px] xl:mb-[100px]">
      <AboutPageFirstSection />

      <AboutPageSecondSection />

      <AboutPageThirdSection />
    </div>
  );
}
