import { Employee } from '@/src/components/home/employees/types'

export type EmployeesResponseType = {
  data: Employee[]
  page: {
    total: number
    nextOffset: number
    previousOffset: number
    limit: number
  }
}
