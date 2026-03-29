import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'


const buttonVariants = cva(
  `font-heading font-bold text-lg uppercase
   px-6 py-3
   border-4 border-foreground
   shadow-brutal
   hover:shadow-brutal-hover
   hover:-translate-x-1 hover:-translate-y-1
   active:shadow-none active:translate-x-0 active:translate-y-0
   transition-all duration-150
   cursor-pointer`,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:brightness-95',
        secondary: 'bg-secondary text-on-primary hover:brightness-95',
        ghost: 'bg-white text-foreground hover:bg-gray-100',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-lg px-6 py-3',
        lg: 'text-xl px-8 py-4',
      },
    },
    // ↓ Valores padrão (se ninguém passar a prop)
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export default function BrutalButton({ children, variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}


export { buttonVariants }
