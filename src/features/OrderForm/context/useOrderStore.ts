import React from "react"
import { OrderContext } from "./OrderContext"

const useOrderStore = () => {
  const orderContext = React.useContext(OrderContext)
  
  if (orderContext) return orderContext
  // Throw error if hook is used outside OrderProvider
  throw new Error("useOrderStore must only be used inside OrderProvider")
}

export default useOrderStore
