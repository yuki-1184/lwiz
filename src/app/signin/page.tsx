import React from 'react';
import { SignInForm } from '@/features/SignInForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ResetPasswordForm } from '@/features/ResetPasswordForm';
import Link from 'next/link';

function Page() {
  return (
    <>
      <div className='container grid items-center pb-8 pt-6 md:py-8 max-w-2xl'>
        <Card>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-2xl mb-2'>サインイン</CardTitle>
            <CardDescription>メールアドレスとパスワードを入力してください。</CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
          <CardFooter>
            アカウントをお持ちでない方は
            <Link arial-label='Sign In' href={'/signin'} className='text-blue-600 hover:underline'>
              こちら
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Page;
