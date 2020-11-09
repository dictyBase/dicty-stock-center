import { useLocation } from "react-router-dom"

/**
 * useSearchQuery parses the query string from the URL
 */
const useSearchQuery = () => new URLSearchParams(useLocation().search)

export default useSearchQuery
