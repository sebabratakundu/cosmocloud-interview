import { SelectHTMLAttributes } from 'react'

type Option = {
  label: string
  value: string
}

type SelectPropsType = {
  options: Option[]
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({ options, ...rest }: SelectPropsType) => {
  return (
    <select className="py-1 px-3 border rounded-md w-full" {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
