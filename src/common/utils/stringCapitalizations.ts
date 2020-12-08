/**
 * capitalizeFirstCharacter converts the first character of a string to uppercase.
 */
const capitalizeFirstCharacter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const capitalizeEveryWordInString = (str: string) =>
  str
    .split(" ")
    .map((item) => capitalizeFirstCharacter(item))
    .join(" ")

export { capitalizeEveryWordInString, capitalizeFirstCharacter }
