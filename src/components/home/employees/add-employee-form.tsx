'use client'

import { PropsWithChildren, useEffect, useRef } from 'react'
import { Form } from '../../ui'
import { useFormState } from 'react-dom'
import { createEmployee } from '@/src/actions/employee.actions'
import { toast } from 'react-toastify'

export const AddEmployeeForm = ({ children }: PropsWithChildren) => {
  const [state, submitForm] = useFormState(createEmployee, {})
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (state?.error && state?.message) {
      toast.error(state.message)
    } else if (state?.id) {
      toast.success('Employee created successfully')
      formRef.current?.reset()
    }
  }, [state])

  return (
    <Form action={submitForm} ref={formRef}>
      {children}
    </Form>
  )
}
