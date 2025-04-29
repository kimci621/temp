import { useEffect } from 'react';
import { useApi } from '@/lib/hooks/use-api';
import type { PartnerLogo } from '@/types/partner-logo';
import { useState } from 'react';
import Image from 'next/image';
import TypographyAnimated from '@/components/ui/typography-animated';
import AnimationBlur from '../animation/blur';
import { cn } from '@/lib/utils/cn';

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
        <div className={'w-full gap-x-4 md:gap-x-16 gap-y-16 flex flex-wrap items-center justify-center mt-6 md:mt-4'}>
          {partners.map((partner, idx) => (
            <div
              key={idx.toString()}
              className={cn(
                'flex items-center justify-center',
                idx !== partners.length - 1 ? 'w-[calc(50%-16px)] md:w-fit' : 'w-full md:w-fit',
              )}
            >
              <AnimationBlur
                duration={0.5}
                isOnce={true}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                />
              </AnimationBlur>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
