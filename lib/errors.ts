import type { AxiosError } from 'axios'

type ErrorPayload = {
  error?: string
  message?: string
}

export function getFriendlyErrorMessage(error: unknown, fallback: string, apiBaseUrl?: string) {
  const axiosError = error as AxiosError<ErrorPayload>
  const backendMessage = axiosError?.response?.data?.error || axiosError?.response?.data?.message

  if (backendMessage) {
    return backendMessage
  }

  const isNetworkError = axiosError?.code === 'ERR_NETWORK' || axiosError?.message === 'Network Error'

  if (isNetworkError) {
    return `Unable to reach the backend${apiBaseUrl ? ` at ${apiBaseUrl}` : ''}. Make sure the API server is running.`
  }

  return axiosError?.message || fallback
}
