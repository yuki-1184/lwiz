'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import signIn from '@/lib/firebase/auth/signin';
import { useRouter } from 'next/navigation';
import { authSchema } from '@/lib/validations/auth';
import { FirebaseError } from 'firebase/app';
import { useToast } from '@/components/ui/use-toast';
import { PasswordInput } from '@/components/password-input';
import { handleFirebaseAuthError } from '@/lib/firebase/firebaseErrors';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

type Inputs = z.infer<typeof authSchema>;

export const SignInForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof authSchema>) => {
    startTransition(async () => {
      try {
        const userCredential = await signIn(values.email, values.password);
        router.push('/home');
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorMessage = handleFirebaseAuthError(error);
          toast({ description: errorMessage });
        } else {
          const unknownError = '申し訳ありませんが、何か問題が発生しました。再度お試しください。';
          toast({ description: unknownError });
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
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <PasswordInput placeholder='**********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Link
              aria-label='Reset Password'
              href={'/signin/reset-password'}
              // TODO: text color -> globals.css
              className='text-sm text-blue-600 underline-offset-4 transition-colors hover:underline mt-6'
            >
              Forgot Password?
            </Link>
          </div>
          <Button type='submit' className='w-full' disabled={isPending}>
            {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />}
            サインイン
            <span className='sr-only'>サインイン</span>
          </Button>
        </form>
      </Form>
    </>
  );
};
