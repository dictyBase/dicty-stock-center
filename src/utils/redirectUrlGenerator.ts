// helper function to set redirect URL with basename if included
const redirectUrlGenerator = (provider: string) => {
  let url
  const basename = process.env.REACT_APP_BASENAME || "/"
  if (basename === "" || basename === "/") {
    url = `${window.location.origin}/${provider}/callback`
  } else if (basename.charAt(0) === "/") {
    url = `${window.location.origin}${basename}/${provider}/callback`
  } else {
    url = `${window.location.origin}/${basename}/${provider}/callback`
  }
  return url
}

export default redirectUrlGenerator
