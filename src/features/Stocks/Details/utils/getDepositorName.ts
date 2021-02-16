type Depositor = {
  /** First name of depositor */
  first_name?: string
  /** Last name of depositor */
  last_name?: string
}

/**
 * getDepositorName returns a string based on depositor data.
 */
const getDepositorName = (depositor: Depositor) => {
  const { first_name, last_name } = depositor

  if (first_name && last_name) {
    return `${first_name} ${last_name}`
  }

  return ""
}

export default getDepositorName
