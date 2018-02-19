import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "components/Home"
import OauthCallback from "components/OauthCallback"
import Login from "components/Login"
import PageNotReady from "components/PageNotReady"
import AuthLoader from "components/Auth"
import Logout from "components/Logout"
import MyDsc from "components/MyDsc"
import Error from "components/Error"
import ShoppingCart from "components/ShoppingCart"
import InfoPage from "components/InfoPage/InfoPage"
import EditInfoPage from "components/InfoPage/EditInfoPage"
import Contact from "components/Contact"
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

export default class RenderRoutes extends Component {
  displayName = "list of routes"
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/:provider/callback" component={OauthCallback} />
        <Route exact path="/information/:name" component={InfoPage} />
        <Route exact path="/information/:name/edit" component={EditInfoPage} />
        <Route exact path="/load/auth" component={AuthLoader} />
        <Route exact path="/strains" component={Strains} />
        <Route exact path="/strains/:id" component={StrainDetail} />
        <Route exact path="/plasmids" component={Plasmids} />
        <Route exact path="/plasmids/:id" component={PlasmidDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/mydsc" component={MyDsc} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/order/shipping" component={Shipping} />
        <Route exact path="/order/shipping/edit" component={EditShipping} />
        <Route exact path="/order/payment" component={Payment} />
        <Route exact path="/order/payment/edit" component={EditPayment} />
        <Route exact path="/order/submit" component={Submit} />
        <Route exact path="/order/submitting" component={SubmitLoader} />
        <Route exact path="/order/submitted" component={OrderConfirmation} />
        <Route exact path="*" component={PageNotReady} />
      </Switch>
    )
  }
}
