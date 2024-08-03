import { EmployeesList } from '@/src/components'
import { Employee } from '@/src/components/home/employees/types'
import { Button, Pagination } from '@/src/components/ui'
import { apiClient } from '@/src/services/apiClient'
import Link from 'next/link'
import { EmployeesResponseType } from './types'

const PER_PAGE = 2

const getEmployees = async ({
  page,
  perPage,
}: {
  page: number
  perPage: number
}) => {
  const [data, err] = await apiClient.list('/employees', { page, perPage })

  if (err) {
    console.error(err)

    throw new Error(
      'Something went wrong with fetching employees, please contact your admin!'
    )
  }

  return data
}

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

  const employeesWithIdAndName = employees.map(
    ({ _id, name }: Pick<Employee, '_id' | 'name'>) => ({
      _id,
      name,
    })
  )

  return (
    <main className="min-h-screen flex flex-col items-center gap-y-5">
      <h1 className="text-3xl font-bold py-24 bg-indigo-50 w-full text-center">
        Employees List
      </h1>
      <div className="flex flex-col gap-y-5">
        <EmployeesList employees={employeesWithIdAndName} />
        <Pagination currentPage={currentPage} total={total} perPage={limit} />
        <Link href="/add-employee">
          <Button>+ Add employee</Button>
        </Link>
      </div>
    </main>
  )
}
