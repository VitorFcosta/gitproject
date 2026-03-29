function App() {
  return (
    <div className="min-h-screen bg-neo-surface p-8">
      {/* Teste das fontes */}
      <h1 className="text-5xl mb-4">Neo-Commit</h1>
      <p className="text-lg mb-8">Se essa frase está em IBM Plex Mono, deu certo!</p>

      {/* Teste das cores */}
      <div className="flex gap-4 mb-8">
        <div className="w-20 h-20 bg-neo-yellow border-4 border-neo-black shadow-brutal" />
        <div className="w-20 h-20 bg-neo-pink border-4 border-neo-black shadow-brutal" />
        <div className="w-20 h-20 bg-neo-cyan border-4 border-neo-black shadow-brutal" />
        <div className="w-20 h-20 bg-neo-error border-4 border-neo-black shadow-brutal" />
      </div>

      {/* Teste do estilo neobrutalist */}
      <button className="bg-neo-yellow font-heading text-xl font-bold uppercase px-6 py-3 border-4 border-neo-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all cursor-pointer">
        Clique aqui
      </button>
    </div>
  )
}

export default App
