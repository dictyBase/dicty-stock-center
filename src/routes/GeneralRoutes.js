import Contact from 'components/Contact'
import Error from 'components/Error'
import ShoppingCart from 'components/ShoppingCart'

export default [
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/error',
    component: Error
  },
  {
    path: '/cart',
    component: ShoppingCart
  }
]
