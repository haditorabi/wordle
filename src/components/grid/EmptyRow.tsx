import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(5))

  return (
    <div className="flex flex-row-reverse justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
