import Link from 'next/link'
import { Employee } from './types'
import { Button, TCol, TRow } from '../../ui'

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
        <Link href={`/${employee._id}`}>
          <Button>
            <small>View</small>
          </Button>
        </Link>
      </TCol>
    </TRow>
  )
}
