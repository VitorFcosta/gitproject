import axiosClient from './axiosClient'

export async function fetchUser(username) {
  const { data } = await axiosClient.get(`/users/${username}`)
  return data
}

export async function fetchRepos(username) {
  const { data } = await axiosClient.get(`/users/${username}/repos`, {
    params: {
      sort: 'stars',
      direction: 'desc',
      per_page: 6,
    },
  })
  return data
}

export async function fetchTrendingRepos() {
  const { data } = await axiosClient.get('/search/repositories', {
    params: {
      q: 'stars:>10000',
      sort: 'stars',
      per_page: 3,
    },
  })
  return data.items
}
