'use client'

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'

export const Header = () => {
  const segment = useSelectedLayoutSegment()
  const params = useParams()

  const title = getTitle(segment, params)

  return (
    <h1 className="text-3xl font-bold py-24 bg-indigo-50 w-full text-center capitalize">
      {title}
    </h1>
  )
}

const getTitle = (segment: string | null, params: Params) => {
  if (!!params && params.employeeId) {
    return 'Employee Details'
  }

  return segment ? segment.replaceAll('-', ' ') : 'employees list'
}
