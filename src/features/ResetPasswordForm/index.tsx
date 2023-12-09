'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { checkEmailSchema } from '@/lib/validations/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import sendResetEmailCode from '@/lib/firebase/auth/resetpassword';
import { FirebaseError } from 'firebase/app';
import { handleFirebaseAuthError } from '@/lib/firebase/firebaseErrors';

type Inputs = z.infer<typeof checkEmailSchema>;

export const ResetPasswordForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof checkEmailSchema>) => {
    startTransition(async () => {
      try {
        await sendResetEmailCode(values.email);
        toast({
          variant: 'success',
          title: 'メールを確認してください。',
          description: '6桁の確認コードを送信しました。',
        });
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorMessage = handleFirebaseAuthError(error);
          toast({ description: errorMessage });
        }
      }
    });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder='example@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full' disabled={isPending}>
            {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />}
            サインイン
            <span className='sr-only'>再設定メールを送信</span>
          </Button>
        </form>
      </Form>
    </>
  );
};
