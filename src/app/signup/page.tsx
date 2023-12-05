'use client';
import React, { useState } from 'react';
import signUp from '@/lib/firebase/auth/signup';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/signin');
  };

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1 className='mt-60 mb-30'>Sign up</h1>
        <form onSubmit={handleForm} className='form'>
          <label htmlFor='email'>
            <p>Email</p>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              name='email'
              id='email'
              placeholder='example@email.com'
            />
          </label>
          <label htmlFor='password'>
            <p>Password</p>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              required
              type='password'
              name='password'
              id='password'
              placeholder='password'
            />
          </label>
          <Button type='submit'>Sign up</Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
