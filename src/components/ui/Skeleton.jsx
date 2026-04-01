import { cn } from '../../lib/utils'

export default function Skeleton({ className }) {
  return (
    <div
      className={cn(
        'bg-white border-4 border-foreground animate-pulse',
        className
      )}
    />
  )
}
