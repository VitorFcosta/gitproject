import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BrutalButton from '../ui/BrutalButton'
import BrutalInput from '../ui/BrutalInput'

export default function SearchBar() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    // Previne o reload da página 
    e.preventDefault()

    const trimmed = username.trim()
    if (!trimmed) return

    // Navega programaticamente para a rota do perfil
    navigate(`/${trimmed}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <BrutalInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite um username do GitHub..."
      />
      <BrutalButton type="submit">
        Buscar
      </BrutalButton>
    </form>
  )
}
