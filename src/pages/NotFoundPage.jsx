import { RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrutalButton from '../components/ui/BrutalButton'
import CodeLabel from '../components/ui/CodeLabel'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-8 relative overflow-hidden">
      {/* Elementos geométricos decorativos */}
      <div className="absolute top-12 left-8 w-8 h-8 border-4 border-foreground rotate-12 animate-in stagger-1" />
      <div className="absolute top-20 right-16 w-16 h-16 bg-accent rotate-45 animate-in stagger-2" />
      <div className="absolute bottom-24 left-16 w-12 h-12 border-4 border-foreground animate-in stagger-3" />
      <div className="absolute bottom-16 right-24 w-6 h-6 bg-primary rotate-12 animate-in stagger-1" />
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-foreground rotate-45 animate-in stagger-4" />

      <div className="text-center max-w-lg relative z-10">
        {/* Status label */}
        <div className="flex justify-end mb-6 animate-in stagger-1">
          <CodeLabel variant="ghost">STATUS: ERROR_404</CodeLabel>
        </div>

        {/* ASCII Art em card inclinado */}
        <div className="animate-in stagger-2">
          <pre className="font-mono text-xs md:text-sm bg-white border-4 border-foreground
                          p-6 mb-8 shadow-brutal rotate-[-2deg] inline-block text-left">
{`     .---(\\{88})---.
    /                \\
   |    FATAL_        |
   |    ERROR:   \\\\   |
    \\     NOT_      /
     '---FOUND---'`}
          </pre>
        </div>

        {/* System failure label */}
        <div className="mb-4 animate-in stagger-3">
          <CodeLabel variant="accent">{'>'}_ SYSTEM FAILURE: DEV_NOT_FOUND</CodeLabel>
        </div>

        {/* Título com sobreposição */}
        <h1 className="text-5xl md:text-7xl mb-8 animate-in stagger-4">
          404_DEV
          <br />
          <span className="relative left-4 md:left-8 text-primary">NÃO</span>
          <br />
          ENCONTRADO
        </h1>

        {/* Botão amarelo */}
        <div className="animate-in stagger-5">
          <Link to="/">
            <BrutalButton size="lg" className="bg-primary">
              <span className="flex items-center gap-2">
                <RotateCcw size={18} />
                TENTAR_NOVAMENTE
              </span>
            </BrutalButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
