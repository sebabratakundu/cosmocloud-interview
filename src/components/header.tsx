'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

export const Header = () => {
  const segment = useSelectedLayoutSegment()
  const title = segment ? segment.replaceAll('-', ' ') : 'employees list'

  return (
    <h1 className="text-3xl font-bold py-24 bg-indigo-50 w-full text-center capitalize">
      {title}
    </h1>
  )
}
