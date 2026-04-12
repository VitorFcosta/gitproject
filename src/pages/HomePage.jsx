import { Code2, Database, Zap, Star, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/shared/SearchBar.jsx'
import BrutalCard from '../components/ui/BrutalCard'
import CodeLabel from '../components/ui/CodeLabel'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>GitProject | Home</title>
        <meta name="description" content="Explore perfis do GitHub no modo Neobrutalista" />
      </Helmet>
      {/* Hero */}
      <main className="flex-1 p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="relative mb-12">
            {/* Watermark "DEVS" */}
            <div
              className="absolute top-0 right-0 font-heading text-[12rem] md:text-[20rem]
                         font-bold text-foreground opacity-5 leading-none select-none
                         pointer-events-none overflow-hidden"
            >
              DEVS
            </div>

            <div className="relative z-10">
              <div className="mb-4 animate-in stagger-1">
                <CodeLabel>SYS_INIT :: V2.0</CodeLabel>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-4 animate-in stagger-2">
                ARQUIVE
                <br />
                <span className="text-primary">TUDO.</span>
              </h1>

              {/* Search */}
              <div className="max-w-xl mb-6 animate-in stagger-4">
                <SearchBar />
              </div>

              {/* Tags de sugestão */}
              <div className="flex flex-wrap gap-3 animate-in stagger-5">
                {['torvalds', 'gaearon', 'sindresorhus', 'tj'].map((name) => (
                  <Link
                    key={name}
                    to={`/${name}`}
                    className="font-mono text-xs px-3 py-1 bg-white border-2 border-foreground
                               hover:bg-accent hover:translate-y-[-2px] transition-all
                               shadow-brutal-sm hover:shadow-brutal"
                  >
                    @{name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer — Dark variant matching Stitch */}
      <footer className="border-t-4 border-foreground bg-foreground text-white p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading font-bold text-lg uppercase">
            Dev<span className="text-primary">_Archive</span>
          </p>
          <div className="flex gap-6 font-mono text-xs">
            <span className="hover:text-primary cursor-pointer transition-colors">DOCUMENTAÇÃO</span>
            <span className="hover:text-primary cursor-pointer transition-colors">STATUS_DA_API</span>
            <span className="hover:text-primary cursor-pointer transition-colors">TERMOS</span>
          </div>
          <p className="font-mono text-xs text-gray-400">
            ©2026 DEV_ARCHIVE - STRUCTURAL STABILITY GUARANTEED
          </p>
        </div>
      </footer>
    </div>
  )
}
