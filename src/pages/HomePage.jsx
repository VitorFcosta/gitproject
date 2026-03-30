import { Code2 } from 'lucide-react'
import SearchBar from '../components/shared/SearchBar.jsx'
import BrutalCard from '../components/ui/BrutalCard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          {/* Título */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Code2 size={48} strokeWidth={3} />
              <h1 className="text-6xl md:text-8xl">
                Git<span className="text-primary">Project</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Explore perfis e repositórios do GitHub
            </p>
          </div>

          <SearchBar />

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {['torvalds', 'gaearon', 'sindresorhus', 'tj'].map((name) => (
              <a
                key={name}
                href={`/${name}`}
                className="font-mono text-sm px-3 py-1 bg-white border-2 border-foreground
                           hover:bg-primary hover:translate-y-[-2px] transition-all"
              >
                @{name}
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t-4 border-foreground bg-white p-6 text-center">
        <p className="font-mono text-sm text-gray-500">
          Feito com{' '}
          <span className="text-neo-error">♥</span>
          {' '}usando React + GitHub API
        </p>
      </footer>
    </div>
  )
}
