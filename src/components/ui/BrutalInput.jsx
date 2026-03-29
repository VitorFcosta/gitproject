import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const BrutalInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        `w-full font-mono text-lg
         px-6 py-3
         bg-white
         border-4 border-foreground
         shadow-brutal-sm
         placeholder:text-gray-400
         focus:outline-none focus:shadow-brutal focus:translate-x-[-2px] focus:translate-y-[-2px]
         transition-all duration-150`,
        className
      )}
      {...props}
    />
  )
})

BrutalInput.displayName = 'BrutalInput'

export default BrutalInput
