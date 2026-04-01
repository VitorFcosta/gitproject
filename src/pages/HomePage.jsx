import { Code2, Database, Zap, Star, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/shared/SearchBar.jsx'
import BrutalCard from '../components/ui/BrutalCard'
import CodeLabel from '../components/ui/CodeLabel'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
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

              <p className="font-mono text-sm md:text-base mb-8 animate-in stagger-3">
                [ INDEXANDO 4.209.112 REPOSITÓRIOS GLOBALMENTE ]
              </p>

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

          {/* Featured Card + System Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in stagger-6">
            {/* Featured Project Card */}
            <BrutalCard
              header="TRENDING :: index_01"
              headerRight="HOT"
              footerContent={
                <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> 4.2k
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity size={12} /> 98% uptime
                  </span>
                </div>
              }
              footerTinted
              className="md:col-span-2"
            >
              <div className="flex items-start gap-3 mb-3">
                <Database size={24} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-1">
                    NEO_KERNEL_01
                  </h3>
                  <p className="font-mono text-xs text-gray-600">
                    Um kernel de sistema de próxima geração projetado para ambientes brutalistas 
                    de alta concorrência. Suporte nativo para protocolos estruturais puros.
                  </p>
                </div>
              </div>
            </BrutalCard>

            {/* System Stats */}
            <div className="flex flex-col gap-4">
              <BrutalCard className="flex-1">
                <div className="text-center">
                  <CodeLabel variant="accent">INTEGRIDADE_DO_SISTEMA</CodeLabel>
                  <p className="font-mono text-xs mt-2 text-gray-600">
                    99.9% de uptime em todas as estruturas de dados indexadas.
                  </p>
                </div>
              </BrutalCard>
              <div className="grid grid-cols-2 gap-4">
                <BrutalCard variant="primary" padding="sm" className="text-center">
                  <span className="font-heading text-2xl font-bold">14 PB</span>
                  <p className="font-mono text-xs mt-1">ARMAZENAMENTO</p>
                </BrutalCard>
                <BrutalCard variant="accent" padding="sm" className="text-center">
                  <span className="font-heading text-2xl font-bold">50ms</span>
                  <p className="font-mono text-xs mt-1">LATÊNCIA</p>
                </BrutalCard>
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
