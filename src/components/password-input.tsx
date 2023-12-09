'use client';

import * as React from 'react';
import { Input, InputProps } from './ui/input';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type='button'
          variant={'ghost'}
          size={'sm'}
          className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <EyeOff className='h-4 w-4' aria-hidden='true' />
          ) : (
            <Eye className='h-4 w-4' aria-hidden='true' />
          )}
          <span className='sr-only'>
            {showPassword ? 'パスワードを非表示' : 'パスワードを表示'}
          </span>
        </Button>
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
