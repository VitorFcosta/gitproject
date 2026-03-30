import { useParams, Link } from 'react-router-dom'
import { Users, BookOpen, MapPin, Star, GitFork } from 'lucide-react'
import { useUser } from '../hooks/useUser'
import BrutalCard from '../components/ui/BrutalCard'
import BrutalButton from '../components/ui/BrutalButton'
import StatCard from '../components/ui/StatCard'
import BackButton from '../components/shared/BackButton'
import Skeleton from '../components/ui/Skeleton'

export default function ProfilePage() {
  // useParams() extrai os parâmetros da URL
  // Se a rota é "/:username" e a URL é "/torvalds",
  // então username = "torvalds"
  const { username } = useParams()

  // Nosso custom hook! Busca dados do usuário + cacheia por 5 min
  const { data: user, isLoading, isError, error } = useUser(username)

  // === ESTADO: LOADING ===
  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface p-8">
        <Skeleton className="h-10 w-32 mb-8" />
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

  // === ESTADO: ERRO ===
  if (isError) {
    return (
      <div className="min-h-screen bg-surface p-8 flex items-center justify-center">
        <BrutalCard variant="primary" className="max-w-md text-center">
          <h2 className="text-3xl mb-4">Oops!</h2>
          <p className="font-mono mb-4">
            {error?.response?.status === 404
              ? `Usuário "${username}" não encontrado.`
              : 'Erro ao buscar dados. Tente novamente.'}
          </p>
          <BackButton to="/" />
        </BrutalCard>
      </div>
    )
  }

  // === ESTADO: SUCESSO ===
  return (
    <div className="min-h-screen bg-surface p-8">
      {/* Navegação */}
      <div className="mb-8">
        <BackButton to="/" />
      </div>

      {/* Perfil */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Avatar */}
          <BrutalCard padding="none" className="w-48 h-48 flex-shrink-0 overflow-hidden">
            <img
              src={user.avatar_url}
              alt={user.name || username}
              className="w-full h-full object-cover"
            />
          </BrutalCard>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl mb-2">{user.name || username}</h1>
            <p className="font-mono text-lg text-gray-500 mb-3">@{user.login}</p>
            {user.bio && (
              <p className="font-mono text-base mb-4">{user.bio}</p>
            )}
            {user.location && (
              <p className="font-mono text-sm text-gray-500 flex items-center gap-2">
                <MapPin size={16} />
                {user.location}
              </p>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={BookOpen} label="Repos" value={user.public_repos} />
          <StatCard icon={Users} label="Followers" value={user.followers} />
          <StatCard icon={Users} label="Following" value={user.following} />
          <StatCard icon={Star} label="Gists" value={user.public_gists} />
        </div>

        {/* CTA */}
        <Link to={`/${username}/repos`}>
          <BrutalButton size="lg" className="w-full md:w-auto">
            Ver Repositórios →
          </BrutalButton>
        </Link>
      </div>
    </div>
  )
}
