import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export const variantsToClassMap = {
  primary: 'bg-primary',
  error: 'bg-error',
} as const

export type VariantType = keyof typeof variantsToClassMap

export type ButtonPropsType = { variant?: VariantType } & PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

export type IconButtonPropsType = {
  icon: ReactNode
  variant?: VariantType
} & ButtonHTMLAttributes<HTMLButtonElement>
