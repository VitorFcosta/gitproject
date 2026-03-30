import { useParams } from 'react-router-dom'
import { useRepos } from '../hooks/userepos'
import RepoCard from '../components/ui/RepoCard'
import BackButton from '../components/shared/BackButton'
import BrutalCard from '../components/ui/BrutalCard'
import Skeleton from '../components/ui/Skeleton'

export default function ReposPage() {
  const { username } = useParams()
  const { data: repos, isLoading, isError, error } = useRepos(username)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface p-8">
        <Skeleton className="h-10 w-32 mb-8" />
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
      <div className="min-h-screen bg-surface p-8 flex items-center justify-center">
        <BrutalCard variant="primary" className="max-w-md text-center">
          <h2 className="text-3xl mb-4">Erro!</h2>
          <p className="font-mono mb-4">
            {error?.response?.status === 404
              ? `Repos de "${username}" não encontrados.`
              : 'Erro ao buscar repositórios.'}
          </p>
          <BackButton to={`/${username}`} />
        </BrutalCard>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-surface p-8">
      {/* Navegação */}
      <div className="mb-8">
        <BackButton to={`/${username}`} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl mb-2">
          Repos de <span className="text-primary">{username}</span>
        </h1>
        <p className="font-mono text-gray-500 mb-8">
          Top {repos.length} repositórios por estrelas
        </p>

        {/* Grid de repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        {/* Mensagem se não tiver repos */}
        {repos.length === 0 && (
          <BrutalCard className="text-center">
            <p className="font-mono text-lg">Nenhum repositório público encontrado.</p>
          </BrutalCard>
        )}
      </div>
    </div>
  )
}
