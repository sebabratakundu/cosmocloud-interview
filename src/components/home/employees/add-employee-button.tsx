'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../../ui'
import { cn } from '@/src/utils/cn'
import { LoaderCircle } from 'lucide-react'

export const AddEmployeeButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className={cn('flex gap-x-2', pending && 'bg-primary-light')}
      disabled={pending}
    >
      {pending && <LoaderCircle size={20} className="animate-spin" />}
      Submit
    </Button>
  )
}
