type PageProps = {
  /** Current order form page number */
  pageNum: number
  /** Function to set the page number */
  setPageNum: Function
  /** Function to indicate if there was an error during order submission */
  setSubmitError: Function
}

export type { PageProps }
