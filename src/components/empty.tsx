import { BookText } from 'lucide-react'

export const Empty = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 text-slate-600">
      <BookText size={80} />
      <h3 className="font-semibold">{title}</h3>
    </div>
  )
}
