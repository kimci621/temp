import TypographyAnimated from '@/components/ui/typography-animated';

export function FooterTitle() {
  return (
    <article className={'flex flex-col gap-6'}>
      <TypographyAnimated
        variant="h2-medium"
        className={'text-(--fill-white) text-center xl:text-left break-words'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        Попробуйте
        <br />
        Huntlee бесплатно!
      </TypographyAnimated>

      <TypographyAnimated
        variant="h4-medium"
        className={'text-(--text-dark) text-center xl:text-left break-words'}
        animationAmount={0.2}
        animationDuration={0.75}
      >
        Запишитесь на персональную демонстрацию и узнайте, как Huntlee поможет вашему бизнесу.
      </TypographyAnimated>
    </article>
  );
}
