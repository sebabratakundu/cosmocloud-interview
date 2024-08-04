import { cn } from '@/src/utils/cn'
import { IconButtonPropsType, variantsToClassMap } from './types'

export const IconButton = ({
  icon,
  variant,
  className,
  ...rest
}: IconButtonPropsType) => {
  return (
    <button
      className={cn(
        'bg-primary text-white rounded-full p-2 flex items-center justify-center',
        variant && variantsToClassMap[variant],
        className
      )}
      type="button"
      {...rest}
    >
      {icon}
    </button>
  )
}
