import { useQuery } from "@tanstack/react-query";
import { fetchRepos } from "../api/githubService";

export function useRepos (username){
    return useQuery({
        queryKey: ['repos',username],
        queryFn: () => fetchRepos(username),
        enabled: !!username, 
        staleTime: 5*60*1000,
    })
}