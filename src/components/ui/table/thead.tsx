import { TRow } from './row'

export const THead = ({ headers }: { headers: string[] }) => {
  return (
    <thead className="bg-primary text-white">
      <TRow>
        {headers.map((header) => (
          <th key={header} className="border border-white capitalize py-2">
            {header}
          </th>
        ))}
      </TRow>
    </thead>
  )
}
