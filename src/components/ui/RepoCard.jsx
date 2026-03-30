import { Star, GitFork, ExternalLink } from 'lucide-react'
import BrutalCard from './BrutalCard'
import LanguageTag from './LanguageTag'

export default function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <BrutalCard hover className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-lg font-bold truncate flex-1">
            {repo.name}
          </h3>
          <ExternalLink size={16} className="flex-shrink-0 ml-2 text-gray-400" />
        </div>

        {/* Descrição */}
        <p className="font-mono text-sm text-gray-600 mb-4 flex-1 line-clamp-2">
          {repo.description || 'Sem descrição'}
        </p>

        {/* Footer: Language + Stats */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t-2 border-foreground">
          <LanguageTag language={repo.language} />
          <div className="flex items-center gap-3 font-mono text-sm">
            <span className="flex items-center gap-1">
              <Star size={14} />
              {repo.stargazers_count.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={14} />
              {repo.forks_count.toLocaleString()}
            </span>
          </div>
        </div>
      </BrutalCard>
    </a>
  )
}
