import { FileCode } from 'lucide-react'

export default function BreadcrumbBar({ username, page = 'profile.dat' }) {
  return (
    <div className="breadcrumb-bar">
      <FileCode size={14} className="breadcrumb-icon" />
      <span>FILE: /users/{username}/{page}</span>
      <span className="ml-auto text-gray-400">READ_ONLY</span>
    </div>
  )
}
