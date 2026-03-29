import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const cardVariants = cva(
  `border-4 border-foreground shadow-brutal
   transition-all duration-150`,
  {
    variants: {
      variant: {
        default: 'bg-white',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'hover:shadow-brutal-hover hover:-translate-x-1 hover:-translate-y-1 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false,
    },
  }
)

export default function BrutalCard({ children, variant, padding, hover, className, ...props }) {
  return (
    <div
      className={cn(cardVariants({ variant, padding, hover }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { cardVariants }
