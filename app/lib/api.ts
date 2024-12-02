interface FetchOptions extends RequestInit {
  token?: string;
}

export async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  const user = localStorage.getItem('user')
  const token = user ? JSON.parse(user).token : null

  const headers = {
    ...options.headers,
    ...(token && { Authorization: `Token ${token}` }),
  }

  // Set default method to 'GET' if not provided
  const method = options.method || 'GET'

  try {
    const response = await fetch(`https://conext.in${endpoint}`, {
      ...options,
      method,  // Use the method provided in options or default to 'GET'
      headers,
    })

    // Handle non-2xx responses (e.g., 4xx, 5xx)
    if (!response.ok) {
      const errorData = await response.json()
      const errorMessage = errorData?.message || 'API request failed'
      throw new Error(errorMessage)
    }

    // Parse the response body
    try {
      return await response.json()
    } catch (jsonError) {
      throw new Error('Failed to parse response as JSON')
    }
  } catch (error) {
    console.error('Error in fetchApi:', error.message)
    throw error // Re-throw the error to be handled by the calling function
  }
}
