import { useState, useEffect } from "react"

type publicationType = Array<{
  /** DOI link for publication */
  doi: string
  /** Pubmed ID, used for linking to our publication page */
  id: string
}>

/**
 * useDOI is a hook specifically designed
 * for returning the APA style format for an array of
 * publications using their DOI links.
 */

const useDOI = (publications: publicationType) => {
  const [data, setData] = useState<Array<any>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    let ignore = false
    const fetchData = async (doi: string, id: string) => {
      const url = `https://doi.org/${doi}`
      setLoading(true)
      try {
        const res = await fetch(url, {
          headers: new Headers({
            Accept: "text/x-bibliography; style=apa-no-doi-no-issue",
          }),
        })
        const txt = await res.text()
        if (!ignore) {
          setData((data) => [
            ...data,
            {
              id,
              data: txt,
            },
          ])
        }

        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    publications.forEach((item) => {
      if (item.doi !== "") {
        fetchData(item.doi, item.id)
      } else {
        setData((data) => [...data, { id: item.id, data: `${item.id} ` }])
      }
    })

    // prevent unnecessary refetching
    // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
    // https://www.robinwieruch.de/react-hooks-fetch-data
    return () => {
      ignore = true
    }
  }, [publications])

  return { data, loading, error }
}

export default useDOI
