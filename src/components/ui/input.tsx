import { cn } from '@/src/utils/cn'
import { InputHTMLAttributes } from 'react'

export const Input = ({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn('py-1 px-3 shadow-sm rounded-md', className)}
      {...rest}
    />
  )
}
