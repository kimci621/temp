'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FormData, formSchema } from '@/types/get-demo';
import { Input } from '@/components/ui/input/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import Link from 'next/link';
import Typography from '@/components/ui/typography'; // Импорт схемы
import { useEffect, useState } from 'react';
import { useHookFormMask } from 'use-mask-input';
import { toast } from 'sonner';
import { type Feedback, useFeedbackApi } from '@/lib/hooks/api/feedback';

export function GetDemoForm({ isInFooter = false }: { isInFooter?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
  });
  const registerWithMask = useHookFormMask(register);

  // Простой обработчик успешной отправки
  const onSubmit = async (data: FormData) => {
    const requestBody: Feedback = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      comment: '',
      feedback_type: 'landing',
      company: data.company || '',
      extra_fields: [
        {
          type: 'string',
          name: 'Количество рекрутеров',
          value: data.recruiters || '',
        },
        {
          type: 'string',
          name: 'Согласие на обработку персональных данных',
          value: data.agreeToNews ? 'Да' : 'Нет',
        },
      ],
    };

    const dialogCloseBtn = document.getElementById('dialog-close-button');

    try {
      const response = await useFeedbackApi(requestBody);

      if (response?.status === 200) {
        toast(
          <Typography
            variant={'text'}
            className="text-center"
          >
            Данные успешно отправлены. <br />
            Наш менеджер свяжется с Вами в ближайшее время
          </Typography>,
          {
            duration: 5000,
            position: 'top-center',
          },
        );

        if (dialogCloseBtn) {
          dialogCloseBtn.click();
        }
      } else {
        toast(
          <Typography
            variant={'text'}
            className="text-center"
          >
            Произошла ошибка при отправке данных. <br />
            Пожалуйста, попробуйте еще раз <br />
            {response?.statusText}
          </Typography>,
          {
            duration: 5000,
            position: 'top-center',
          },
        );
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      return;
    } finally {
      setIsSubmitted(true);
    }
  };

  // Логгер ошибок
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onError = (errors: any) => {
    console.error('Ошибки при отправке формы:', errors);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setValue('agreeToNews', true);
  }, []);
  return (
    <form
      // Используем стандартный handleSubmit из react-hook-form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={'flex flex-col gap-4 w-full md:w-[423px]'}
      noValidate
    >
      <Input
        {...register('fullName')}
        label={'* Как к вам обращаться'}
        placeholder={'Имя Фамилия'}
        error={errors.fullName ? errors.fullName.message : ''}
      />

      <Input
        {...registerWithMask('phone', ['+7 (999) 999-99-99'], { required: true })}
        label={'* Номер телефона'}
        placeholder={'+7 (___) ___-__-__'}
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
        placeholder={'ООО "Ваша компания"'}
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
        onCheckedChange={(checked: boolean) => {
          setValue('agreeToNews', checked);
        }}
        label={'Разрешаю отправлять мне новости о продукте'}
        defaultChecked
        textClassName={isInFooter ? 'text-(--text-dark)' : ''}
      />

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
        className={'mt-6 w-fit'}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Запросить демо сейчас'}
      </Button>
    </form>
  );
}
