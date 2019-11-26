import React from "react"

const usePublicationFetch = publications => {
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
