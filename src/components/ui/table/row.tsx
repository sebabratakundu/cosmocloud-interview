import { TableHTMLAttributes } from 'react'

export const TRow = ({
  children,
  className,
  ...rest
}: TableHTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  )
}
