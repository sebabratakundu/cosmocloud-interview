import { THead, Table } from '../../ui'
import { EmployeeListItem } from './employee-list-item'
import { Employee } from './types'

export const EmployeesList = ({
  employees,
}: {
  employees: Pick<Employee, '_id' | 'name'>[]
}) => {
  const headers = Object.keys(employees[0]).concat('actions')

  return (
    <Table>
      <THead headers={headers} />
      <tbody>
        {employees.map((employee) => (
          <EmployeeListItem key={employee._id} employee={employee} />
        ))}
      </tbody>
    </Table>
  )
}
