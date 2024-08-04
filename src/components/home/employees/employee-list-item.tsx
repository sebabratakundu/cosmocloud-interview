import Link from 'next/link'
import { Employee } from './types'
import { IconButton, TCol, TRow } from '../../ui'
import { Eye } from 'lucide-react'
import { DeleteEmployee } from './delete-employee-button'

export const EmployeeListItem = ({
  employee,
}: {
  employee: Pick<Employee, '_id' | 'name'>
}) => {
  return (
    <TRow className="border">
      <TCol>{employee._id}</TCol>
      <TCol>{employee.name}</TCol>
      <TCol>
        <div className="flex gap-x-2">
          <Link href={`/${employee._id}`}>
            <IconButton icon={<Eye size={16} />} />
          </Link>
          <DeleteEmployee employeeId={employee._id} />
        </div>
      </TCol>
    </TRow>
  )
}
