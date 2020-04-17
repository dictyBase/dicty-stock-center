import React from "react"
import { shallow } from "enzyme"
import OrderForm from "./OrderForm"
import { Helmet } from "react-helmet"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import OrderFormStepper from "./OrderFormStepper"
import Alert from "@material-ui/lab/Alert"
import AlertTitle from "@material-ui/lab/AlertTitle"
import initialValues from "./utils/initialValues"

describe("OrderForm/OrderForm", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe("initial render", () => {
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(ShippingPage)).toHaveLength(1)
      expect(wrapper.find(OrderFormStepper)).toHaveLength(1)
    })
  })
  describe("display for second order step", () => {
    // @ts-ignore
    React.useState = jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [1, jest.fn()])
      .mockImplementationOnce(() => [initialValues, jest.fn()])
      .mockImplementationOnce(() => [false, jest.fn()])
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(PaymentPage)).toHaveLength(1)
      expect(wrapper.find(OrderFormStepper)).toHaveLength(1)
    })
    it("does not render wrong pages or error display", () => {
      expect(wrapper.find(ShippingPage)).toHaveLength(0)
      expect(wrapper.find(SubmitPage)).toHaveLength(0)
      expect(wrapper.find(Alert)).toHaveLength(0)
      expect(wrapper.find(AlertTitle)).toHaveLength(0)
    })
  })
  describe("display for third order step", () => {
    // @ts-ignore
    React.useState = jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [2, jest.fn()])
      .mockImplementationOnce(() => [initialValues, jest.fn()])
      .mockImplementationOnce(() => [false, jest.fn()])
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(SubmitPage)).toHaveLength(1)
      expect(wrapper.find(OrderFormStepper)).toHaveLength(1)
    })
    it("does not render wrong pages or error display", () => {
      expect(wrapper.find(ShippingPage)).toHaveLength(0)
      expect(wrapper.find(PaymentPage)).toHaveLength(0)
      expect(wrapper.find(Alert)).toHaveLength(0)
      expect(wrapper.find(AlertTitle)).toHaveLength(0)
    })
  })
  describe("display for default switch case", () => {
    const realUseState = React.useState
    jest
      .spyOn(React, "useState")
      // @ts-ignore
      .mockImplementationOnce(() => realUseState(4))
      .mockImplementationOnce(() => realUseState(initialValues))
      .mockImplementationOnce(() => realUseState(false))
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(OrderFormStepper)).toHaveLength(1)
    })
    it("does not render wrong pages or error display", () => {
      expect(wrapper.find(ShippingPage)).toHaveLength(0)
      expect(wrapper.find(PaymentPage)).toHaveLength(0)
      expect(wrapper.find(SubmitPage)).toHaveLength(0)
      expect(wrapper.find(Alert)).toHaveLength(0)
      expect(wrapper.find(AlertTitle)).toHaveLength(0)
    })
  })
  describe("display for submission error", () => {
    // @ts-ignore
    React.useState = jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [2, jest.fn()])
      .mockImplementationOnce(() => [initialValues, jest.fn()])
      .mockImplementationOnce(() => [true, jest.fn()])
    const wrapper = shallow(<OrderForm />)
    it("always renders initial components", () => {
      expect(wrapper.find(Helmet)).toHaveLength(1)
      expect(wrapper.find(OrderFormStepper)).toHaveLength(1)
      expect(wrapper.find(Alert)).toHaveLength(1)
      expect(wrapper.find(AlertTitle)).toHaveLength(1)
      expect(wrapper.find(SubmitPage)).toHaveLength(1)
    })
    it("does not render other pages", () => {
      expect(wrapper.find(ShippingPage)).toHaveLength(0)
      expect(wrapper.find(PaymentPage)).toHaveLength(0)
    })
  })
})
