import { cn } from '@/src/utils/cn'
import { TableHTMLAttributes } from 'react'

export const TCol = ({
  children,
  className,
  ...rest
}: TableHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td className={cn('py-2 px-10', className)} {...rest}>
      {children}
    </td>
  )
}
