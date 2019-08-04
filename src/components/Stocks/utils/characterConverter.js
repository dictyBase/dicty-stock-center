// @flow

/**
 * characterConverter is a simple function that replaces HTML entity characters
 * with their appropriate unicode character. More replacements will be added as
 * spotted.
 * An example: https://www.compart.com/en/unicode/U+03B3
 */
const characterConverter = (item: string) => item.replace("&#947;", "γ")

export default characterConverter
