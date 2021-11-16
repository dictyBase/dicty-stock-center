import { Navigate, Route, Routes } from "react-router-dom"
import { OrderProvider } from "./context/OrderContext"
import OrderConfirmation from "./OrderConfirmation"
import OrderForm from "./OrderForm"

const OrderRoutes = () => {
  return (
    <OrderProvider>
      <Routes>
        <Route index element={<Navigate to="checkout" />} />
        <Route path="checkout" element={<OrderForm />} />
        <Route path="submitted/:orderId" element={<OrderConfirmation />} />
      </Routes>
    </OrderProvider>
  )
}

export default OrderRoutes
