import { useParams, Link } from 'react-router-dom'
import { Users, BookOpen, MapPin, Star, GitFork, Database, Zap } from 'lucide-react'
import { useUser } from '../hooks/useUser'
import { useEvents } from '../hooks/useEvents'
import { useRepos } from '../hooks/userepos'
import BrutalCard from '../components/ui/BrutalCard'
import BrutalButton from '../components/ui/BrutalButton'
import StatCard from '../components/ui/StatCard'
import BreadcrumbBar from '../components/shared/BreadcrumbBar'
import TabNav from '../components/shared/TabNav'
import Skeleton from '../components/ui/Skeleton'
import CodeLabel from '../components/ui/CodeLabel'
import ContributionHeatmap from '../components/ui/ContributionHeatmap'

const TAG_COLORS = {
  JAVASCRIPT: 'tag-javascript',
  REACT: 'tag-react',
  'REACT_JS': 'tag-react',
  RUST: 'tag-rust',
  'RUST_LANG': 'tag-rust',
  TYPESCRIPT: 'tag-typescript',
  PYTHON: 'tag-python',
  GO: 'tag-go',
  'NODE.JS': 'tag-node',
  'NODE_JS': 'tag-node',
}

function getTopLanguages(repos) {
  if (!repos || repos.length === 0) return ['JAVASCRIPT', 'REACT', 'NODE_JS', 'PYTHON', 'RUST', 'GO']
  
  const langCounts = {}
  repos.forEach(repo => {
    if (repo.language) {
      const lang = repo.language.toUpperCase().replace(/\s+/g, '_')
      langCounts[lang] = (langCounts[lang] || 0) + 1
    }
  })
  
  const sorted = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang)
    .slice(0, 8)

  return sorted.length > 0 ? sorted : ['JAVASCRIPT', 'REACT', 'NODE_JS', 'PYTHON', 'RUST', 'GO']
}

export default function ProfilePage() {
  const { username } = useParams()
  const { data: user, isLoading, isError, error } = useUser(username)
  const { data: events, isLoading: eventsLoading } = useEvents(username)
  const { data: repos, isLoading: reposLoading } = useRepos(username)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary p-8">
        <Skeleton className="h-10 w-32 mb-4" />
        <Skeleton className="h-8 w-full mb-4" />
        <div className="flex flex-col md:flex-row gap-8">
          <Skeleton className="w-48 h-48" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-6 w-96" />
            <Skeleton className="h-6 w-48" />
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-secondary p-8 flex items-center justify-center">
        <BrutalCard variant="primary" className="max-w-md text-center">
          <h2 className="text-3xl mb-4">Oops!</h2>
          <p className="font-mono mb-4">
            {error?.response?.status === 404
              ? `Usuário "${username}" não encontrado.`
              : 'Erro ao buscar dados. Tente novamente.'}
          </p>
          <Link to="/">
            <BrutalButton variant="ghost" size="sm">VOLTAR</BrutalButton>
          </Link>
        </BrutalCard>
      </div>
    )
  }

  const topLanguages = getTopLanguages(repos)

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="animate-in stagger-1 mb-8">
          <TabNav username={username} />
        </div>

        {/* Profile Card with Header */}
        <div className="mb-8 animate-in stagger-2">
          <BrutalCard
            header={`FILE_REPORT :: /users/${user.login}/profile.dat`}
            headerRight="READ_ONLY"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 border-4 border-foreground overflow-hidden bg-accent">
                <img
                  src={user.avatar_url}
                  alt={user.name || username}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl mt-0 mb-2">
                  {(user.name || username).toUpperCase()}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <CodeLabel>STATUS: ONLINE</CodeLabel>
                  <CodeLabel variant="accent">@{user.login}</CodeLabel>
                  {user.location && (
                    <span className="font-mono text-sm flex items-center gap-1">
                      <MapPin size={14} />
                      {user.location}
                    </span>
                  )}
                </div>
                {user.bio && (
                  <p className="font-mono text-sm mb-4">
                    <span className="text-accent font-bold mr-1">&gt;</span>
                    {user.bio}
                  </p>
                )}
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to={`/${username}/repos`}>
                    <BrutalButton variant="accent" size="sm">RUN REPOS_FETCH</BrutalButton>
                  </Link>
                  <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                    <BrutalButton variant="ghost" size="sm">VIEW_GIT</BrutalButton>
                  </a>
                </div>
              </div>
            </div>
          </BrutalCard>
        </div>

        {/* Stats */}
        <div className="mb-8 animate-in stagger-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Users} label="Followers" value={user.followers} index={0} />
            <StatCard icon={Users} label="Following" value={user.following} index={1} />
            <StatCard icon={BookOpen} label="Repos" value={user.public_repos} index={2} />
            <StatCard icon={Star} label="Gists" value={user.public_gists} index={3} />
          </div>
        </div>

        {/* Contribution Heatmap */}
        <div className="mb-8 animate-in stagger-4">
          {eventsLoading ? (
            <Skeleton className="h-48" />
          ) : (
            <ContributionHeatmap events={events} />
          )}
        </div>

        {/* Pinned Repos */}
        <div className="mb-8 animate-in stagger-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reposLoading ? (
              <>
                <Skeleton className="h-48" />
                <Skeleton className="h-48" />
              </>
            ) : (
              repos?.slice(0, 2).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BrutalCard
                    hover
                    header={`MODULE :: ${repo.language ? repo.language.toLowerCase() : 'code'}_project.rs`}
                    headerRight="OPEN_SOURCE"
                    footerContent={
                      <div className="flex items-center gap-4 font-mono text-sm">
                        <span className="flex items-center gap-1">
                          <Star size={14} /> {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={14} /> {repo.forks_count.toLocaleString()}
                        </span>
                      </div>
                    }
                    footerTinted
                    className="h-full"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Database size={20} className="text-gray-400" />
                      <CodeLabel variant="accent">V1.0</CodeLabel>
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase mb-2">
                      {repo.name.replace(/-/g, '_')}
                    </h3>
                    <p className="font-mono text-xs text-gray-600 line-clamp-2">
                      {repo.description || 'Sem descrição disponível.'}
                    </p>
                  </BrutalCard>
                </a>
              ))
            )}
          </div>
        </div>

        {/* Tags / Languages */}
        <div className="mb-8 animate-in stagger-6">
          <BrutalCard
            header="SYSTEM :: /usr/local/lib/stack"
            headerRight="INSTALLED"
          >
            <h3 className="font-heading text-lg font-bold uppercase mb-3">
              <span className="text-accent font-bold mr-1">&gt;</span>
              INSTALLED_PACKAGES
            </h3>
            <div className="flex flex-wrap gap-2">
              {topLanguages.map((tag) => {
                const colorClass = TAG_COLORS[tag] || ''
                return (
                  <span
                    key={tag}
                    className={`font-mono text-xs font-bold px-3 py-1 border-2 border-foreground
                               transition-all cursor-default hover:translate-y-[-1px]
                               ${colorClass || 'bg-white text-foreground'}`}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </BrutalCard>
        </div>

        {/* Footer */}
        <div className="animate-in stagger-7">
          <div className="bg-white border-4 border-foreground p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <span className="font-heading font-bold text-xl uppercase">
                ARQUIVISTA
              </span>
              <div className="flex gap-4 font-mono text-xs">
                <span className="hover:text-accent cursor-pointer transition-colors">PRIVACY</span>
                <span className="hover:text-accent cursor-pointer transition-colors">TERMS</span>
                <span className="hover:text-accent cursor-pointer transition-colors">API_DOCS</span>
                <span className="hover:text-accent cursor-pointer transition-colors">GIT_REMOTE</span>
              </div>
              <span className="font-mono text-xs text-gray-500">
                © 2026 END_OF_LINE — SYSTEM_STABLE: YES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
