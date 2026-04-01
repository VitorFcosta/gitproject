import { useQuery } from '@tanstack/react-query'
import { fetchUserEvents } from '../api/githubService'

export function useEvents(username) {
  return useQuery({
    queryKey: ['events', username],
    queryFn: () => fetchUserEvents(username),
    enabled: !!username,
    staleTime: 5 * 60 * 1000,
  })
}
