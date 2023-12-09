import React from 'react';
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
            <CardTitle className='text-2xl mb-2'>パスワード再設定メールを送る</CardTitle>
            <CardDescription>
              メールアドレスを入力してください。確認コードを送信します。{' '}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResetPasswordForm />
          </CardContent>
          <CardFooter>
            すでにアカウントをお持ちの方は
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
