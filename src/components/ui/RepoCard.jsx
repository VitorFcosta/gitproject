import { Star, GitFork, ExternalLink } from 'lucide-react'
import BrutalCard from './BrutalCard'
import LanguageTag from './LanguageTag'
import CodeLabel from './CodeLabel'

export default function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <BrutalCard hover className="h-full flex flex-col">
        {/* Header: nome + link */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-lg font-bold truncate flex-1 uppercase">
            {repo.name}
          </h3>
          <ExternalLink size={16} className="flex-shrink-0 ml-2 text-gray-400" />
        </div>

        {/* Descrição */}
        <p className="font-mono text-xs text-gray-600 mb-4 flex-1 line-clamp-2">
          {repo.description || 'Sem descrição disponível.'}
        </p>

        {/* Language tag */}
        <div className="mb-3">
          <LanguageTag language={repo.language} />
        </div>

        {/* Separador tracejado (estilo Stitch) */}
        <div className="border-t-2 border-dashed border-foreground my-2" />

        {/* Footer: Stats */}
        <div className="flex items-center gap-4 font-mono text-sm pt-2">
          <span className="flex items-center gap-1">
            <Star size={14} />
            {repo.stargazers_count.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={14} />
            {repo.forks_count.toLocaleString()}
          </span>
        </div>
      </BrutalCard>
    </a>
  )
}
