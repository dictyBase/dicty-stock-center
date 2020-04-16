import { FormikValues } from "../utils/initialValues"

export type SubmitProps = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to move to previous step */
  prevStep: Function
  /** Function to set a submit error (bool) */
  setSubmitError: Function
}
