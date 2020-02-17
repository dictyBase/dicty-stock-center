import { useEffect, useState } from "react"
import navItems from "constants/Navbar"

const navbarDataFormatter = json =>
  json.data.map(item => {
    const navbarItems = item.attributes.items.map(c => ({
      name: c.label,
      href: c.link,
    }))
    return {
      dropdown: true,
      title: item.attributes.display,
      items: navbarItems,
    }
  })

/**
 * useNavbar is a hook for fetching dictyBase navbar
 * JSON data. It uses an included JSON file as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */

const useNavbar = () => {
  const [navbarData, setNavbarData] = useState(navItems)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchNavbar = async () => {
      const url = process.env.REACT_APP_NAVBAR_JSON
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        if (res.ok) {
          setNavbarData(navbarDataFormatter(json))
        } else {
          setError(res.statusText)
        }
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchNavbar()
  }, [])

  return { navbarData, loading, error }
}

export default useNavbar
