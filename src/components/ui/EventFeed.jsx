import { GitCommit, GitFork, Star, Eye, CircleDot } from 'lucide-react'
import BrutalCard from './BrutalCard'
import CodeLabel from './CodeLabel'


const EVENT_MAP = {
  PushEvent: { icon: GitCommit, label: 'PUSH', getDesc: (e) => `${e.payload.commits?.length || 0} commit(s) em ${e.repo.name.split('/')[1]}` },
  ForkEvent: { icon: GitFork, label: 'FORK', getDesc: (e) => `Fork de ${e.repo.name.split('/')[1]}` },
  WatchEvent: { icon: Star, label: 'STAR', getDesc: (e) => `Starred ${e.repo.name.split('/')[1]}` },
  CreateEvent: { icon: CircleDot, label: 'CREATE', getDesc: (e) => `Criou ${e.payload.ref_type} em ${e.repo.name.split('/')[1]}` },
  IssuesEvent: { icon: Eye, label: 'ISSUE', getDesc: (e) => `${e.payload.action} issue em ${e.repo.name.split('/')[1]}` },
}

export default function EventFeed({ events }) {
  if (!events || events.length === 0) {
    return (
      <BrutalCard className="text-center">
        <p className="font-mono text-sm">Nenhuma atividade recente.</p>
      </BrutalCard>
    )
  }

  return (
    <div className="space-y-2">
      {events.slice(0, 6).map((event) => {
        const mapped = EVENT_MAP[event.type] || {
          icon: CircleDot,
          label: event.type.replace('Event', '').toUpperCase(),
          getDesc: (e) => e.repo.name.split('/')[1],
        }
        const Icon = mapped.icon
        const timeAgo = getTimeAgo(event.created_at)

        return (
          <div
            key={event.id}
            className="flex items-center gap-3 bg-white border-2 border-foreground px-4 py-3
                       hover:translate-x-1 transition-transform"
          >
            <Icon size={16} strokeWidth={3} className="flex-shrink-0" />
            <CodeLabel variant="accent" className="flex-shrink-0">
              {mapped.label}
            </CodeLabel>
            <span className="font-mono text-xs flex-1 truncate">
              {mapped.getDesc(event)}
            </span>
            <span className="font-mono text-xs text-gray-400 flex-shrink-0">
              {timeAgo}
            </span>
          </div>
        )
      })}
    </div>
  )
}


function getTimeAgo(dateString) {
  const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000)
  if (seconds < 60) return 'agora'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}min`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`
  return `${Math.floor(seconds / 86400)}d`
}
