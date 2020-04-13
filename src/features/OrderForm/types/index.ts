export type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

export type PageProps = {
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
  /** Function to indicate if there was an error during order submission */
  setSubmitError: Function
}
