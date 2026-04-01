export default function LanguageTag({ language }) {
  if (!language) return null

  return (
    <span className="inline-block font-mono text-xs font-bold uppercase px-2 py-0.5
                     bg-accent text-foreground border-2 border-foreground">
      {language}
    </span>
  )
}
