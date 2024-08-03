import { cn } from '@/src/utils/cn'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const Button = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className={cn('bg-primary rounded-md text-white py-1 px-5', className)}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
