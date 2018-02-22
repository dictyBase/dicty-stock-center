import Shipping from 'components/form/Shipping'
import EditShipping from 'components/form/EditShipping'
import Payment from 'components/form/Payment'
import EditPayment from 'components/form/EditPayment'
import Submit from 'components/form/Submit'
import SubmitLoader from 'components/form/SubmitLoader'
import OrderConfirmation from 'components/OrderConfirmation'

export default [
  {
    path: '/order/shipping',
    component: Shipping
  },
  {
    path: '/order/shipping/edit',
    component: EditShipping
  },
  {
    path: '/order/payment',
    component: Payment
  },
  {
    path: '/order/payment/edit',
    component: EditPayment
  },
  {
    path: '/order/submit',
    component: Submit
  },
  {
    path: '/order/submitting',
    component: SubmitLoader
  },
  {
    path: '/order/submitted',
    component: OrderConfirmation
  }
]
