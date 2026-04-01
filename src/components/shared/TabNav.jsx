import { Link, useLocation } from 'react-router-dom'
import { Home, Code2, BarChart3, LayoutDashboard, Heart } from 'lucide-react'
import { cn } from '../../lib/utils'

const TABS = [
  { path: '', label: './INICIO', icon: Home, enabled: true },
  { path: '/repos', label: './REPO', icon: Code2, enabled: true },
  { path: '#estats', label: './ESTATS', icon: BarChart3, enabled: false },
  { path: '#dashboard', label: './DASHBOARD', icon: LayoutDashboard, enabled: false },
  { path: '#contrib', label: './CONTRIB', icon: Heart, enabled: false },
]

export default function TabNav({ username }) {
  const { pathname } = useLocation()

  return (
    <div className="flex gap-1 border-4 border-foreground bg-white p-1 mb-4 overflow-x-auto">
      {TABS.map((tab) => {
        const fullPath = tab.enabled ? `/${username}${tab.path}` : null
        const isActive = tab.enabled && pathname === `/${username}${tab.path}`

        const baseClasses = cn(
          'flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase font-bold transition-all whitespace-nowrap',
          isActive
            ? 'bg-primary text-foreground'
            : tab.enabled
              ? 'hover:bg-gray-100'
              : 'text-gray-300 cursor-not-allowed'
        )

        if (!tab.enabled) {
          return (
            <span key={tab.path} className={baseClasses}>
              <tab.icon size={14} strokeWidth={3} />
              {tab.label}
            </span>
          )
        }

        return (
          <Link
            key={tab.path}
            to={fullPath}
            className={baseClasses}
          >
            <tab.icon size={14} strokeWidth={3} />
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
