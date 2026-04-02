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

export async function fetchAllRepos(username, page = 1) {
  const { data, headers } = await axiosClient.get(`/users/${username}/repos`, {
    params: {
      sort: 'updated',
      direction: 'desc',
      per_page: 12,
      page,
    },
  })

  // Parse 'Link' header to detect if there's a next page
  const linkHeader = headers?.link || ''
  const hasNextPage = linkHeader.includes('rel="next"')

  return { repos: data, nextPage: hasNextPage ? page + 1 : undefined }
}

export function fetchUserEvents(username) {
  return axiosClient
    .get(`/users/${username}/events/public`, {
      params: { per_page: 10 }
    })
    .then(res => res.data)
}

