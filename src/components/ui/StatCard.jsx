import BrutalCard from './BrutalCard'
import CodeLabel from './CodeLabel'

export default function StatCard({ icon: Icon, label, value, index = 0 }) {
  const statId = String(index + 1).padStart(3, '0')

  return (
    <div className="space-y-1">
      <CodeLabel>STAT_{statId}: {label}</CodeLabel>
      <BrutalCard padding="sm" className="text-center hover:bg-accent/20 transition-colors">
        <div className="flex flex-col items-center gap-1">
          {Icon && <Icon size={20} strokeWidth={3} />}
          <span className="font-heading text-3xl font-bold">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
          <span className="font-mono text-xs text-gray-500 uppercase">{label}</span>
        </div>
      </BrutalCard>
    </div>
  )
}
