import { useEffect } from "react"

const useRefreshToken = (callback, intervalRef, delay, isAuthenticated) => {
  useEffect(() => {
    callback()
  }, [callback])

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }
    intervalRef.current = setInterval(() => {
      callback()
    }, delay)
    return () => clearInterval(intervalRef.current)
  }, [callback, intervalRef, delay, isAuthenticated])
}

export default useRefreshToken
