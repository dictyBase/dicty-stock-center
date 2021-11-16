import { CartItem } from "common/types"
import React from "react"
import { FormikValues } from "../utils/initialValues"

enum OrderActionType {
  SET_ORDER = "SET_ORDER",
}

interface OrderState {
  orderID?: string
  formData: FormikValues
  cartItems: Array<CartItem>
  cartTotal: string
}

const initialState: OrderState = {
  orderID: undefined,
  formData: {} as FormikValues,
  cartItems: [],
  cartTotal: "0",
}

type Action = {
  type: OrderActionType.SET_ORDER
  payload: OrderState
}

interface OrderStateContextProps {
  state: OrderState
  dispatch: React.Dispatch<Action>
}

const OrderContext = React.createContext<OrderStateContextProps>(
  {} as OrderStateContextProps,
)

const orderReducer = (state: OrderState, action: Action) => {
  switch (action.type) {
    case "SET_ORDER":
      return { ...action.payload }
    default:
      return state
  }
}

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(orderReducer, {
    ...initialState,
  })
  const value = React.useMemo(() => ({ state, dispatch }), [state])

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export type { OrderState, OrderActionType, Action }
export { OrderContext, OrderProvider, orderReducer, initialState }
