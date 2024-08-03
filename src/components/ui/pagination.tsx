import { cn } from '@/src/utils/cn'
import { Button } from './button'
import Link from 'next/link'

export const Pagination = ({
  total,
  perPage,
  currentPage,
}: {
  currentPage: number
  total: number
  perPage: number
}) => {
  console.log(total, perPage, currentPage)

  const noOfPages = total > perPage ? Math.ceil(total / perPage) : 1
  const pages = Array.from({ length: noOfPages }, (_, i) => i + 1)

  const handlePrev = () => {}
  const handleNext = () => {}

  return (
    <div className="flex gap-x-2">
      {currentPage > 1 && (
        <Link
          href={{
            pathname: '/',
            query: { page: currentPage - 1 },
          }}
        >
          <Button>Prev</Button>
        </Link>
      )}
      {pages.map((page) => (
        <Button
          className={cn(currentPage !== page && 'bg-indigo-50')}
          key={page}
        >
          {page}
        </Button>
      ))}
      {currentPage < noOfPages && (
        <Link href={{ pathname: '/', query: { page: currentPage + 1 } }}>
          <Button>Next</Button>
        </Link>
      )}
    </div>
  )
}
