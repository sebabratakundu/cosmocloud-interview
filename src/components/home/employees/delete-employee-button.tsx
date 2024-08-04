'use client'

import { LoaderCircle, Trash } from 'lucide-react'
import { IconButton } from '../../ui'
import { deleteEmployee } from '@/src/actions/employee.actions'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { cn } from '@/src/utils/cn'

export const DeleteEmployee = ({ employeeId }: { employeeId: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleDelete = async () => {
    setIsLoading(true)
    const res = await deleteEmployee(employeeId)
    setIsLoading(false)

    if (res?.error) {
      toast.error(res.message)
    } else {
      toast.success(res.message)
    }
  }

  useEffect(() => {
    console.log(isLoading)
  })

  return (
    <IconButton
      variant="error"
      className={cn(isLoading && 'bg-error-light')}
      icon={
        isLoading ? (
          <LoaderCircle size={16} className="animate-spin" />
        ) : (
          <Trash size={16} />
        )
      }
      disabled={isLoading}
      onClick={handleDelete}
    />
  )
}
