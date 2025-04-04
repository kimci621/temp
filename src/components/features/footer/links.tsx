import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import TypographyAnimated from '@/components/ui/typography-animated';

export function FooterLinks() {
  const links = [
    {
      label: 'Telegram',
      href: 'https://t.me/hritrecruiting',
    },
    {
      label: 'ВКонтакте',
      href: 'https://vk.com/huntleehr',
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/company/huntleeru',
    },
    {
      label: 'info@huntlee.ru',
      href: 'mailto:info@huntlee',
    },
  ];
  return (
    <article className={'flex flex-col justify-between items-center xl:items-start'}>
      <div className={'flex flex-col gap-6 md:gap-8 xl:gap-6 md:flex-row xl:flex-col mb-10'}>
        {links.map((link) => (
          <Link
            href={link.href}
            className={'group flex items-center gap-3 w-fit'}
            key={link.href}
          >
            <TypographyAnimated
              variant="h4-medium"
              className={'text-(--fill-white) w-full text-center xl:text-left'}
              animationAmount={0.2}
              animationDuration={0.75}
            >
              {link.label}
            </TypographyAnimated>

            <ArrowUpRight className={'opacity-0 group-hover:opacity-100 transition text-(--active-green)'} />
          </Link>
        ))}
      </div>

      <Image
        src="/sk-member.svg"
        alt="Skolkovo участник"
        width={164}
        height={48}
      />
    </article>
  );
}
