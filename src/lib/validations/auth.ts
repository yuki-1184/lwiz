import * as z from 'zod';

export const authSchema = z.object({
  email: z
    .string()
    .min(1, { message: '有効なメールアドレスを入力してください。' })
    .email('有効なメールアドレスを入力してください。'),
  password: z
    .string()
    .min(8, { message: 'パスワードは少なくとも8文字以上である必要があります。' })
    .max(100),
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
  //   message:
  //     'パスワードは少なくとも8文字以上で、1つの大文字、1つの小文字、1つの数字、および1つの特殊文字を含まなければなりません。',
  // }),
});

export const checkEmailSchema = z.object({
  email: authSchema.shape.email,
});

export const resetPasswordSchema = z
  .object({
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
    code: z.string().min(6, { message: '確認コードは6文字である必要があります。' }).max(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'パスワードが一致しません。もう一度確認してください。',
    path: ['confirmPassword'],
  });
