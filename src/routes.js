import Login from "components/Login"
import OauthCallback from "components/OauthCallback"
import { AuthLoader, Logout } from "components/Auth"
import Home from "components/Home"
import MyDsc from "components/MyDsc"
import Error from "components/Error"
import ShoppingCart from "components/ShoppingCart"
import InfoPage from "components/InfoPage"
import EditInfoPage from "components/InfoPage/EditInfoPage"
import Contact from "components/Contact"
import PageNotReady from "components/PageNotReady"
import Strains from "components/Strains"
import StrainDetail from "components/Strains/StrainDetail"
import Plasmids from "components/Plasmids"
import PlasmidDetail from "components/Plasmids/PlasmidDetail"
import Shipping from "components/form/Shipping"
import EditShipping from "components/form/EditShipping"
import Payment from "components/form/Payment"
import EditPayment from "components/form/EditPayment"
import Submit from "components/form/Submit"
import SubmitLoader from "components/form/SubmitLoader"
import OrderConfirmation from "components/OrderConfirmation"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:name/information",
    component: InfoPage,
  },
  {
    path: "/:name/information/edit",
    component: EditInfoPage,
    protected: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/:provider/callback",
    component: OauthCallback,
  },
  {
    path: "/load/auth",
    component: AuthLoader,
  },
  {
    path: "/strains",
    component: Strains,
  },
  {
    path: "/strains/:id",
    component: StrainDetail,
  },
  {
    path: "/plasmids",
    component: Plasmids,
  },
  {
    path: "/plasmids/:id",
    component: PlasmidDetail,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/my-dsc",
    component: MyDsc,
    protected: true,
  },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "/cart",
    component: ShoppingCart,
  },
  {
    path: "/order/shipping",
    component: Shipping,
  },
  {
    path: "/order/shipping/edit",
    component: EditShipping,
  },
  {
    path: "/order/payment",
    component: Payment,
  },
  {
    path: "/order/payment/edit",
    component: EditPayment,
  },
  {
    path: "/order/submit",
    component: Submit,
  },
  {
    path: "/order/submitting",
    component: SubmitLoader,
  },
  {
    path: "/order/submitted",
    component: OrderConfirmation,
  },
  {
    path: "*",
    component: PageNotReady,
  },
]

export default routes
