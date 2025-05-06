import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(1, 'Введите Имя и Фамилию'), // Обязательное
  phone: z
    .string()
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер телефона (+7 (000) 000-00-00)'), // Обязательное
  email: z.string().email('Введите корректный email').or(z.literal('')), // Может быть пустым
  company: z.string().optional(), // Может быть пустым
  recruiters: z
    .string()
    .refine(
      (val) => {
        if (!val) return true; // Поле необязательное, если пустое, то валидация проходит
        const num = Number(val);
        return !Number.isNaN(num) && num > 0;
      },
      {
        message: 'Введите число больше 0',
      },
    )
    .optional(),
  agreeToNews: z.boolean().default(false), // Чекбокс
});

export type FormData = z.infer<typeof formSchema>;
