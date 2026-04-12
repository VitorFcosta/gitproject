import { useMemo } from 'react'
import BrutalCard from './BrutalCard'
import CodeLabel from './CodeLabel'

const WEEKS = 20
const DAYS_PER_WEEK = 7

function generateHeatmapData(events) {
  const grid = Array.from({ length: WEEKS }, () =>
    Array.from({ length: DAYS_PER_WEEK }, () => 0)
  )

  if (!events || events.length === 0) return grid

  const now = new Date()

  events.forEach((event) => {
    const eventDate = new Date(event.created_at)
    const diffDays = Math.floor((now - eventDate) / (1000 * 60 * 60 * 24))

    if (diffDays < 0 || diffDays >= WEEKS * DAYS_PER_WEEK) return

    const weekIndex = WEEKS - 1 - Math.floor(diffDays / 7)
    const dayIndex = 6 - (diffDays % 7)

    if (weekIndex >= 0 && weekIndex < WEEKS && dayIndex >= 0 && dayIndex < DAYS_PER_WEEK) {
      grid[weekIndex][dayIndex] = Math.min(grid[weekIndex][dayIndex] + 1, 4)
    }
  })

  return grid
}

const HEAT_COLORS = [
  'bg-[#1a1a1a]',
  'bg-[#0a3d4a]',
  'bg-[#0e6e7a]',
  'bg-[#14b8c6]',
  'bg-[#00F0FF]',
]

export default function ContributionHeatmap({ events }) {
  const grid = useMemo(() => generateHeatmapData(events), [events])

  const totalContributions = useMemo(() => {
    return grid.reduce((total, week) =>
      total + week.reduce((wTotal, day) => wTotal + day, 0), 0
    )
  }, [grid])

  return (
    <BrutalCard
      header="SYS_CONTRIB :: contributons_events.log"
      headerRight="LIVE_DATA"
    >
      {/* Section title */}
      <h3 className="font-heading text-lg font-bold uppercase mb-4">
        CONTRIBUIÇÕES_RECENTES
      </h3>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] w-fit">
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`heatmap-cell rounded-[2px] ${HEAT_COLORS[level]}`}
                  title={`Nível: ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <div className="flex items-center justify-between mt-4">
        <span className="font-mono text-xs text-gray-500">
          CONTRIB_TOTAL: {totalContributions} EVENTS CAPTURED IN LAST_SESSION
        </span>
      </div>
    </BrutalCard>
  )
}
