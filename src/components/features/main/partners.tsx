import { useEffect } from 'react';
import { useApi } from '@/lib/hooks/use-api';
import type { PartnerLogo } from '@/types/partner-logo';
import { useState } from 'react';
import Image from 'next/image';
import TypographyAnimated from '@/components/ui/typography-animated';
import AnimationBlur from '../animation/blur';

export function MainPartners() {
  const response = useApi<PartnerLogo[]>('/api/partners-logo');
  const [partners, setPartners] = useState<PartnerLogo[]>([]);

  useEffect(() => {
    if (response?.data) {
      setPartners(response.data);
    }
  }, [response]);

  return (
    <section className={'flex flex-col items-center w-full px-8'}>
      <TypographyAnimated
        variant={'h3-medium'}
        className={'text-center text-(--text-light) mb-6 md:mb-10'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        Среди пользователей и партнёров Huntlee
      </TypographyAnimated>

      {partners && (
        <div className={'flex flex-wrap items-center justify-center gap-16'}>
          {partners.map((partner) => (
            <AnimationBlur
              key={partner.id}
              duration={0.5}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={`w-[${partner.width}px] h-[${partner.height}px]`}
              />
            </AnimationBlur>
          ))}
        </div>
      )}
    </section>
  );
}
