import { cn } from '@/src/utils/cn'
import { ButtonPropsType, variantsToClassMap } from './types'

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonPropsType) => {
  return (
    <button
      className={cn(
        'bg-primary rounded-md text-white py-2 px-5',
        variant && variantsToClassMap[variant],
        className
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
