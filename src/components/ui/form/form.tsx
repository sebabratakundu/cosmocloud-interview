import {
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react'

export const Form = forwardRef(function CustomForm(
  { children, ...rest }: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>,
  ref: ForwardedRef<HTMLFormElement>
) {
  return (
    <form
      ref={ref}
      className="flex flex-col gap-y-5 mx-auto shadow-sm p-5 rounded-sm text-sm"
      {...rest}
    >
      {children}
    </form>
  )
})
