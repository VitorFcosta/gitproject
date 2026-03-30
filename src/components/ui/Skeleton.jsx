import { cn } from '../../lib/utils'

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'bg-gray-200 animate-pulse border-4 border-foreground',
        className
      )}
      {...props}
    />
  )
}
