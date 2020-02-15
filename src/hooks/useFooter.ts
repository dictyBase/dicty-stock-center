import { useEffect, useState } from "react"
import footerItems from "constants/Footer"

const footerDataFormatter = json =>
  json.data.map(item => {
    const menuItemsArr = item.attributes.items.map(c => ({
      description: c.label,
      link: c.link,
    }))

    return [
      {
        header: {
          description: item.attributes.display,
        },
        items: menuItemsArr,
      },
    ]
  })

/**
 * useFooter is a hook for fetching dictyBase footer
 * JSON data. It uses an included JSON file as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */

const useFooter = () => {
  const [footerData, setFooterData] = useState<any>(footerItems)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchFooter = async () => {
      const url = process.env.REACT_APP_FOOTER_JSON
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        if (res.ok) {
          const footerArr = footerDataFormatter(json)
          setFooterData(footerArr)
        } else {
          setError(res.statusText)
        }
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchFooter()
  }, [])

  return { footerData, loading, error }
}

export default useFooter
