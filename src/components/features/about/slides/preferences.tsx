import TypographyAnimated from '@/components/ui/typography-animated';
import type { aboutPageSlides } from '@/lib/db/about-slides';
import { cn } from '@/lib/utils/cn';

interface AboutPageSlidePreferencesProps {
  slideItems: (typeof aboutPageSlides)[number]['firstItems' | 'secondItems'];
  numberColor: (typeof aboutPageSlides)[number]['numberColor'];
}

export function AboutPageSlidePreferences({ slideItems, numberColor }: AboutPageSlidePreferencesProps) {
  return (
    <ul className={'flex flex-col gap-3 md:gap-4 xl:gap-6 mb-6 md:mb-8 xl:mb-16'}>
      {slideItems
        ? slideItems.map((item, idx) => (
            <li key={idx.toString()}>
              <article className={'flex flex-col gap-2'}>
                <div className={'flex'}>
                  <TypographyAnimated
                    variant={'h4-medium'}
                    className={cn('mr-2 xl:mr-4 w-8 max-w-8 min-w-8 text-center', `text-[${numberColor}]`)}
                  >
                    <span style={{ color: numberColor }}>0{idx + 1}</span>
                  </TypographyAnimated>

                  <TypographyAnimated
                    variant={'h4-medium'}
                    className={'text-[#E7E7E7]'}
                  >
                    {item.title}
                  </TypographyAnimated>
                </div>

                <ul className={'flex flex-col gap-2'}>
                  {item.subtitles.map((subItem, subIdx) => (
                    <li
                      key={subIdx.toString()}
                      className={'flex'}
                    >
                      <TypographyAnimated
                        variant={'text'}
                        className={'text-[#8F8F8F] mr-2 xl:mr-4 w-8 max-w-8 min-w-8 text-center'}
                      >
                        -
                      </TypographyAnimated>

                      <TypographyAnimated
                        variant={'text'}
                        className={'text-[#8F8F8F]'}
                      >
                        {subItem}
                      </TypographyAnimated>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))
        : null}
    </ul>
  );
}
