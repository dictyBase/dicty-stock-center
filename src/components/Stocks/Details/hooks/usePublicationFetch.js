// @flow
import React from "react"

type publicationType = Array<{
  /** DOI link for publication */
  doi: string,
  /** Pubmed ID, used for linking to our publication page */
  id: string,
}>

/**
 * usePublicationFetch is a hook specifically designed
 * for returning the APA style format for an array of
 * publications.
 */

const usePublicationFetch = (publications: publicationType) => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const fetchData = async (doi, id) => {
    const url = `https://doi.org/${doi}`
    setLoading(true)
    try {
      const res = await fetch(url, {
        headers: new Headers({
          Accept: "text/x-bibliography; style=apa-no-doi-no-issue",
        }),
      })
      const txt = await res.text()
      setData(data => [
        ...data,
        {
          id,
          data: txt,
        },
      ])
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  React.useEffect(() => {
    publications.forEach(item => {
      fetchData(item.doi, item.id)
    })
  }, [publications])

  return { data, loading, error }
}

export default usePublicationFetch
