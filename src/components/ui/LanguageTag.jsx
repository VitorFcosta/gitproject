import { LANGUAGE_COLORS, DEFAULT_LANGUAGE_COLOR } from '../../lib/constants'

export default function LanguageTag({ language }) {
  if (!language) return null

  const color = LANGUAGE_COLORS[language] || DEFAULT_LANGUAGE_COLOR

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs">
      <span
        className="w-3 h-3 border-2 border-foreground"
        style={{ backgroundColor: color }}
      />
      {language}
    </span>
  )
}
