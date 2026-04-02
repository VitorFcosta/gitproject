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

export default function BrutalCard({ 
  children, 
  variant, 
  padding, 
  hover, 
  header,
  headerRight,
  footerContent,
  footerTinted,
  className, 
  ...props 
}) {
  const hasHeader = !!header
  const hasFooter = !!footerContent

  return (
    <div
      className={cn(
        cardVariants({ variant, padding: hasHeader || hasFooter ? 'none' : padding, hover }),
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div className="card-header">
          <span>{header}</span>
          {headerRight && (
            <span className="card-header-right">{headerRight}</span>
          )}
        </div>
      )}
      <div className={hasHeader || hasFooter ? 'p-6' : ''}>
        {children}
      </div>
      {hasFooter && (
        <div className={footerTinted ? 'card-footer-tinted' : 'border-t-4 border-foreground px-6 py-4'}>
          {footerContent}
        </div>
      )}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { cardVariants }
