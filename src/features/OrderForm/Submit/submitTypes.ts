import { FormikValues } from "../utils/initialValues"

export type SubmitProps = {
  /** Full object of form data (shipping and payment) */
  formData: FormikValues
  /** Function to move to previous step */
  prevStep: () => void
  /** Function to set a submit error (bool) */
  setSubmitError: (arg0: boolean) => void
}
