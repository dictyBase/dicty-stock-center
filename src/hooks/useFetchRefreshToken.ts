import { useEffect } from "react"

const useRefreshToken = (
  callback: Function,
  intervalRef: React.MutableRefObject<any>,
  delay: number,
  isAuthenticated: boolean,
) => {
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
