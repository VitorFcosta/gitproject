import { Link, useLocation } from 'react-router-dom'
import { Code2, Menu } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()


  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const prompt = `NAV :: ${pathname}`

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Code2
            size={24}
            strokeWidth={3}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="font-heading text-xl font-bold uppercase">
            Dev<span className="text-primary">_Archive</span>
          </span>
        </Link>

        {/* Links de navegação */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-heading text-sm font-bold uppercase hover:text-primary transition-colors"
          >
            Explorar
          </Link>
          <span className="font-heading text-sm font-bold uppercase text-gray-400">
            Repositórios
          </span>
          <span className="font-heading text-sm font-bold uppercase text-gray-400">
            Estrelas
          </span>
        </div>

        {/* Breadcrumb terminal (mobile e desktop) */}
        <div className="font-mono text-xs bg-foreground text-primary px-3 py-1">
          <span className="text-accent">{'>'}_</span> {prompt}
        </div>
      </div>
    </nav>
  )
}
