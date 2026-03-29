import BrutalButton from './components/ui/BrutalButton'
import BrutalCard from './components/ui/BrutalCard'
import BrutalInput from './components/ui/BrutalInput'

function App() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">

      {/* Header */}
      <h1 className="text-5xl md:text-7xl mb-2">Neo-Commit</h1>
      <p className="text-lg text-gray-600 mb-12">Design System — Vitrine de Componentes</p>

      {/* === BOTÕES === */}
      <section className="mb-16">
        <h2 className="text-2xl mb-6">Buttons</h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <BrutalButton>Primary</BrutalButton>
          <BrutalButton variant="secondary">Secondary</BrutalButton>
          <BrutalButton variant="ghost">Ghost</BrutalButton>
        </div>

        <div className="flex flex-wrap gap-4">
          <BrutalButton size="sm">Small</BrutalButton>
          <BrutalButton size="md">Medium</BrutalButton>
          <BrutalButton size="lg">Large</BrutalButton>
        </div>
      </section>

      {/* === CARDS === */}
      <section className="mb-16">
        <h2 className="text-2xl mb-6">Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BrutalCard>
            <h3 className="text-xl mb-2">Default Card</h3>
            <p>Background branco, sombra brutal.</p>
          </BrutalCard>

          <BrutalCard variant="primary">
            <h3 className="text-xl mb-2">Primary Card</h3>
            <p>Fundo amarelo vivid.</p>
          </BrutalCard>

          <BrutalCard variant="secondary" hover>
            <h3 className="text-xl mb-2">Hoverable Card</h3>
            <p>Passa o mouse aqui! ↗</p>
          </BrutalCard>
        </div>
      </section>

      {/* === INPUT === */}
      <section className="mb-16">
        <h2 className="text-2xl mb-6">Input</h2>

        <div className="max-w-md">
          <BrutalInput placeholder="Digite um username do GitHub..." />
        </div>
      </section>

      {/* === COMPOSIÇÃO === */}
      <section>
        <h2 className="text-2xl mb-6">Composição (Preview da SearchBar)</h2>

        <BrutalCard className="max-w-lg">
          <h3 className="text-xl mb-4">Buscar Perfil</h3>
          <div className="flex gap-4">
            <BrutalInput placeholder="ex: torvalds" />
            <BrutalButton>Buscar</BrutalButton>
          </div>
        </BrutalCard>
      </section>

    </div>
  )
}

export default App
