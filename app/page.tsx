import { EmployeesList, Empty } from '@/src/components'
import { Employee } from '@/src/components/home/employees/types'
import { Button, Pagination } from '@/src/components/ui'
import { EmployeesResponseType } from './types'
import Link from 'next/link'
import { getEmployees } from '@/src/actions/employee.actions'

const PER_PAGE = 10

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number }
}) {
  const { page: curPage = 1 } = searchParams
  const currentPage = Number(curPage)

  const {
    data: employees,
    page: { total, limit },
  }: EmployeesResponseType = await getEmployees({
    page: currentPage,
    perPage: PER_PAGE,
  })

  if (total === 0 && employees.length === 0) {
    return (
      <>
        <Empty title="No employees!" />
        <Link href="/add-employee">
          <Button>+ Add employee</Button>
        </Link>
      </>
    )
  }

  const employeesWithIdAndName = employees.map(
    ({ _id, name }: Pick<Employee, '_id' | 'name'>) => ({
      _id,
      name,
    })
  )

  return (
    <>
      <EmployeesList employees={employeesWithIdAndName} />
      <Pagination currentPage={currentPage} total={total} perPage={limit} />
      <Link href="/add-employee">
        <Button>+ Add employee</Button>
      </Link>
    </>
  )
}
