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
import { useRouter } from 'next/navigation';
import signUp from '@/lib/firebase/auth/signup';
import { authSchema } from '@/lib/validations/auth';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

type Inputs = z.infer<typeof authSchema>;

export const SignUpForm = () => {
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
        await signUp(values.email, values.password);
        router.push('/home');
      } catch (error) {
        const unknownError = '申し訳ありませんが、何か問題が発生しました。再度お試しください。';
        toast({ description: unknownError });
      }
    });
  };

  return (
    <>
      <p>新規登録</p>
      <div className='flex w-full min-h-[350px] justify-center p-10 items-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full' disabled={isPending}>
              {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />}
              サインアップ
              <span className='sr-only'>サインイン</span>
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
