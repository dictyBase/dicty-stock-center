/**
 * capitalizeString converts the first character of a string to uppercase.
 */
const capitalizeString = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default capitalizeString
