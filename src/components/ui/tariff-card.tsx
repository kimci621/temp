import { cn } from '@/lib/utils';
import { Button } from './button';
import { SectionTag } from './section-tag';
import Typography from './typography';
import Image from 'next/image';
import Link from 'next/link';
import { GetDemoDialog } from '../features/get-demo-dialog';

export type TariffCardType = 'free' | 'business';

export function TariffCard({ type }: { type: TariffCardType }) {
  const buttonText = {
    free: 'Зарегистрироваться',
    business: 'Запросить демо',
  };

  const labelText = {
    free: 'Начните с малого',
    business: 'Максимум возможностей',
  };

  const labelEmoji = {
    free: '🚀',
    business: '🦾',
  };

  const titleText = {
    free: 'Начальный',
    business: 'Бизнес',
  };

  const titleColorStyle = {
    free: 'text-(--active-dark)',
    business: 'text-(--fill-white)',
  };

  const subTitleText = {
    free: 'Всё, что нужно для эффективного рекрутинга – без ограничений по возможностям!',
    business: 'Расширенные возможности для роста и эффективности',
  };

  const subTitleColorStyle = {
    free: 'text-(--text-light)',
    business: 'text-(--fill-white)',
  };

  const descriptionText = {
    free: 'Для малого бизнеса и команд, которые хотят пользоваться мощным функционалом без лишних затрат. Идеальное решение, если у вас небольшая команда, но большие цели!',
    business:
      'Для тех, кто хочет работать без ограничений и развивать процессы по максимуму. Выбирайте "Бизнес" – работайте на полной мощности!',
  };

  const descriptionColorStyle = {
    free: 'text-(--text-light)',
    business: 'text-(--fill-white)',
  };

  const preferences = {
    free: [
      'Полный доступ ко всем инструментам, за исключением ИИ',
      'До 2х лицензий',
      'До 5000 резюме в базе',
      'Поддержка через форму ОС',
    ],
    business: [
      'Всё, что в "Начальном" + ИИ инструменты',
      'От 3х лицензий – подключайте всю команду',
      'Неограниченное количество резюме в базе',
      'Обучение для быстрой адаптации',
      'Доработки под ваши задачи по запросу',
      'Персональный менеджер и техподдержка',
    ],
  };

  const preferencesColorStyle = {
    free: 'text-(--text-light)',
    business: 'text-(--fill-white)',
  };

  const preferencesCursorColorStyle = {
    free: 'bg-(--active-green)',
    business: 'bg-(--fill-white)',
  };

  const label = (
    <SectionTag
      isLight
      className={'w-fit'}
      emoji={labelEmoji[type]}
      name={labelText[type]}
    />
  );

  const title = (
    <Typography
      variant={'h3-medium'}
      className={cn(titleColorStyle[type])}
    >
      {titleText[type]}
    </Typography>
  );

  const subTitle = (
    <Typography
      variant={'h4-medium'}
      className={cn(subTitleColorStyle[type])}
    >
      {subTitleText[type]}
    </Typography>
  );

  const description = (
    <Typography
      variant={'text'}
      className={cn(descriptionColorStyle[type])}
    >
      {descriptionText[type]}
    </Typography>
  );

  const preferencesList = (
    <ul className={'flex flex-col gap-3 my-3'}>
      {preferences[type].map((preference, idx) => (
        <li
          key={idx.toString()}
          className={'flex items-center gap-4'}
        >
          <span className={cn('w-0.5 h-full rounded-full', preferencesCursorColorStyle[type])} />

          <Typography
            variant={'button'}
            className={cn(preferencesColorStyle[type])}
          >
            {preference}
          </Typography>
        </li>
      ))}
    </ul>
  );

  const price = {
    free: (
      <Typography
        variant={'h4-medium'}
        className={'text-(--active-green) my-10'}
      >
        Бесплатно
      </Typography>
    ),
    business: (
      <Typography
        variant={'h4-medium'}
        className={'flex flex-col gap-1 text-(--fill-white) my-10'}
      >
        <p className={'hidden md:block'}>4500 ₽/мес за 1 лицензию</p>
        <p className={'hidden md:block'}>*При оплате на год</p>
        <p className={'md:hidden'}>4500 ₽/мес за 1 рекрутера</p>
      </Typography>
    ),
  };

  const btn = {
    free: (
      <Link
        href={'https://huntlee.ru/main/signup'}
        target={'_blank'}
      >
        <Button
          variant={'secondary'}
          size={'sm'}
          rounded={'default'}
        >
          <Typography variant={'button'}>{buttonText[type]}</Typography>
        </Button>
      </Link>
    ),
    business: (
      <GetDemoDialog
        triggerButton={
          <Button
            variant={'secondary'}
            size={'sm'}
            rounded={'default'}
          >
            <Typography variant={'button'}>{buttonText[type]}</Typography>
          </Button>
        }
      />
    ),
  };

  return (
    <div
      className={'relative overflow-hidden border border-(--border-light) rounded-xl px-10 py-6 flex flex-col gap-3'}
    >
      <div className={'flex flex-col gap-3 h-full'}>
        {label}
        {title}
        {subTitle}
        {description}
        {preferencesList}
      </div>
      {price[type]}
      {btn[type]}

      {type === 'business' && (
        <Image
          src={'/images/bg-business.png'}
          alt={'tariff-card-bg'}
          width={2652}
          height={2652}
          className={'rounded-xl absolute top-0 right-0 scale-160 -z-1 size-full'}
        />
      )}
    </div>
  );
}
