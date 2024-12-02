interface FetchOptions extends RequestInit {
  token?: string
}

export async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  const user = localStorage.getItem('user')
  const token = user ? JSON.parse(user).token : null

  const headers = {
    ...options.headers,
    ...(token && { Authorization: `Token ${token}` }),
  }

  const response = await fetch(`https://app.conext.in${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error('API request failed')
  }

  return response.json()
}

