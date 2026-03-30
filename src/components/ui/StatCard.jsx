import BrutalCard from './BrutalCard'

export default function StatCard({ icon: Icon, label, value }) {
  return (
    <BrutalCard padding="sm" className="text-center">
      <div className="flex flex-col items-center gap-1">
        {Icon && <Icon size={20} strokeWidth={3} />}
        <span className="font-heading text-2xl font-bold">{value}</span>
        <span className="font-mono text-xs text-gray-500 uppercase">{label}</span>
      </div>
    </BrutalCard>
  )
}
