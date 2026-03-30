import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BrutalButton from  '../ui/BrutalButton'

export default function BackButton({to}){
    const navigate = useNavigate()
    return (
    <BrutalButton
      variant="ghost"
      size="sm"
      onClick={() => navigate(to || -1)}
    >
      <span className="flex items-center gap-2">
        <ArrowLeft size={18} />
        Voltar
      </span>
    </BrutalButton>
  )
}