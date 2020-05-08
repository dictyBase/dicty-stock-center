/**
 * characterConverter is a function to replace any HTML Symbol
 * Entities. All numeric entities are converted via a regular expression.
 * Named entities will need to be manually added over time.
 * https://www.webstandards.org/learn/reference/charts/entities/symbol_entities/index.html
 */

const regex = /&#(\d+);/g

const characterConverter = (str: string) =>
  str
    .replace(regex, function (match, dec) {
      return String.fromCharCode(dec)
    })
    .replace("&gamma;", "γ")

export default characterConverter
