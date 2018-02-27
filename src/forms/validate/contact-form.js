// @flow
import isEmail from "validator/lib/isEmail"

export const syncValidate = (data: Object) => {
  let errors = {}

  if (!data.name) {
    errors.name = "Required field"
  }
  if (!data.email) {
    errors.email = "Required field"
  } else if (!isEmail(data.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}
