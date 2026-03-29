import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/githubService'

export function useUser(username) {
  return useQuery({
    // queryKey = identidade única desse dado no cache
    // Quando username muda, o React Query faz um novo fetch automaticamente
    queryKey: ['user', username],

    // queryFn = a função que busca os dados
    queryFn: () => fetchUser(username),

    // Só executa se username existir (evita fetch com string vazia)
    // !! converte para booleano, !!undefined = false/ !!vitor = true
    enabled: !!username,

    // Cache fica salvos no cache por 5 minutos 
    staleTime: 5 * 60 * 1000,
  })
}
