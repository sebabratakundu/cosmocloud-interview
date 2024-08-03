import { cn } from '@/src/utils/cn'
import { TableHTMLAttributes } from 'react'

export const Table = ({
  children,
  className,
  ...rest
}: TableHTMLAttributes<HTMLTableElement>) => {
  return (
    <table className={cn('shadow-md', className)} {...rest}>
      {children}
    </table>
  )
}
