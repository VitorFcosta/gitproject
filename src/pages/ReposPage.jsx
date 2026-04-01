import { useParams } from 'react-router-dom'
import { useRepos } from '../hooks/userepos'
import RepoCard from '../components/ui/RepoCard'
import TabNav from '../components/shared/TabNav'
import BrutalCard from '../components/ui/BrutalCard'
import Skeleton from '../components/ui/Skeleton'
import CodeLabel from '../components/ui/CodeLabel'

export default function ReposPage() {
  const { username } = useParams()
  const { data: repos, isLoading, isError, error } = useRepos(username)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary p-8">
        <Skeleton className="h-10 w-full mb-8" />
        <Skeleton className="h-12 w-72 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-secondary p-8 flex items-center justify-center">
        <BrutalCard variant="primary" className="max-w-md text-center">
          <h2 className="text-3xl mb-4">Erro!</h2>
          <p className="font-mono mb-4">
            {error?.response?.status === 404
              ? `Repos de "${username}" não encontrados.`
              : 'Erro ao buscar repositórios.'}
          </p>
        </BrutalCard>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="animate-in stagger-1 mb-8">
          <TabNav username={username} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-in stagger-2">
          <div>
            <CodeLabel>SYS_REPOS</CodeLabel>
            <h1 className="text-4xl md:text-6xl mt-2">
              {username.toUpperCase()}
            </h1>
          </div>
          <BrutalCard padding="sm" className="flex items-center gap-2">
            <CodeLabel variant="accent">{repos.length}</CodeLabel>
            <span className="font-mono text-xs uppercase">Repositórios_Públicos</span>
          </BrutalCard>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <div key={repo.id} className={`animate-in stagger-${Math.min(i + 3, 6)}`}>
              <RepoCard repo={repo} />
            </div>
          ))}
        </div>

        {repos.length === 0 && (
          <BrutalCard className="text-center mt-8">
            <p className="font-mono text-lg">Nenhum repositório público encontrado.</p>
          </BrutalCard>
        )}
      </div>
    </div>
  )
}
