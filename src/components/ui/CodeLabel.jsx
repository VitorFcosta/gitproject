import { cn } from '../../lib/utils'

export default function CodeLabel({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-foreground text-primary',      // preto + amarelo
    accent: 'bg-accent text-foreground',         // cyan + preto
    ghost: 'bg-white text-foreground border-2 border-foreground',  // branco + preto
  }

  return (
    <span
      className={cn(
        'inline-block font-mono text-xs font-bold uppercase px-3 py-1 tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
