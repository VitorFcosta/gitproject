import BackButton from '../components/shared/BackButton'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="text-center">
        <pre className="font-mono text-2xl md:text-4xl font-bold mb-8 leading-tight">
{`
 ██╗  ██╗ ██████╗ ██╗  ██╗
 ██║  ██║██╔═████╗██║  ██║
 ███████║██║██╔██║███████║
 ╚════██║████╔╝██║╚════██║
      ██║╚██████╔╝     ██║
      ╚═╝ ╚═════╝      ╚═╝
`}
        </pre>

        <h1 className="text-3xl md:text-5xl mb-4">Página não encontrada</h1>
        <p className="font-mono text-lg mb-8">
          Essa rota não existe. Talvez o usuário digitou errado?
        </p>

        <BackButton to="/" />
      </div>
    </div>
  )
}
