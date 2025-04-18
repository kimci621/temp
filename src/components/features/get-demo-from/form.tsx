'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FormData, formSchema } from '@/types/get-demo';
import { Input } from '@/components/ui/input/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import Link from 'next/link';
import Typography from '@/components/ui/typography'; // Импорт схемы

export function GetDemoForm({ isInFooter = false }: { isInFooter?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const submitCallback = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => submitCallback(data))}
      className={'flex flex-col gap-4 w-full md:w-[423px]'}
    >
      <Input
        {...register('fullName')}
        label={'* Как к вам обращаться'}
        placeholder={'Имя Фамилия'}
        error={errors.fullName ? errors.fullName.message : ''}
      />

      <Input
        {...register('phone')}
        label={'* Номер телефона'}
        placeholder={'+7(___)___-__-__'}
        error={errors.phone ? errors.phone.message : ''}
      />

      <Input
        {...register('email')}
        label={'Ваш E-mail'}
        placeholder={'example@mail.ru'}
        error={errors.email ? errors.email.message : ''}
      />

      <Input
        {...register('company')}
        label={'Название компании'}
        placeholder={'ООО “Ваша компания”'}
        error={errors.company ? errors.company.message : ''}
      />

      <Input
        {...register('recruiters')}
        label={'Количество рекрутеров'}
        placeholder={'Число'}
        type={'number'}
        error={errors.recruiters ? errors.recruiters.message : ''}
      />

      <Checkbox
        {...register('agreeToNews')}
        id={'agreeToNews'}
        label={'Разрешаю отправлять мне новости о продукте'}
        defaultChecked={true}
        textClassName={isInFooter ? 'text-(--text-dark)' : ''}
      />

      {/*{errors.agreeToNews && <p>{errors.agreeToNews.message}</p>}*/}
      <Typography variant={'caption'}>
        <p className={'text-(--text-dark-gray)'}>
          Отправляя форму, я даю согласие на обработку{' '}
          <Link
            href={'/'}
            className={'text-(--active-green)'}
          >
            персональных данных
          </Link>{' '}
          в соответствии с
          <Link
            href={'/'}
            className={'text-(--active-green)'}
          >
            политикой конфиденциальности
          </Link>
        </p>
      </Typography>

      <Button
        type="submit"
        className={'mt-6'}
      >
        Запросить демо сейчас
      </Button>
    </form>
  );
}
