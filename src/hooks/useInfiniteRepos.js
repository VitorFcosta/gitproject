import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchAllRepos } from '../api/githubService'

export function useInfiniteRepos(username) {
  return useInfiniteQuery({
    queryKey: ['repos', 'infinite', username],
    queryFn: ({ pageParam = 1 }) => fetchAllRepos(username, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: !!username,
    staleTime: 5 * 60 * 1000,
  })
}
