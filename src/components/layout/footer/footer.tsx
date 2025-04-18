import { FooterBackground } from '@/components/ui/footer-background';
import { FooterTitle } from '@/components/features/footer/title';
import { FooterLinks } from '@/components/features/footer/links';
import { GetDemoForm } from '@/components/features/get-demo-from/form';

import styles from './footer.module.scss';
import { cn } from '@/lib/utils/cn';

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden is-dark-bg">
      <FooterBackground />

      <div className={'bg-(--fill-light-bg) w-full h-[41px] rounded-br-4xl rounded-bl-4xl'} />

      <div className="container-footer mx-auto">
        <div className={cn(styles.footerInner, 'mt-[64px] mb-[40px] md:mb-[80px] xl:mt-[160px] px-6 xl:px-0')}>
          <div className={'sm:[grid-area:footerTitle] grid justify-center mb-10 xl:mb-20'}>
            <FooterTitle />
          </div>

          <div className={'sm:[grid-area:footerForm] grid justify-center mb-10 xl:mb-0'}>
            <GetDemoForm isInFooter={true} />
          </div>

          <div className={'sm:[grid-area:footerLinks] grid justify-center xl:justify-start'}>
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
