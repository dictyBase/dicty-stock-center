import React from "react"
import { shallow } from "enzyme"
import { AddToCartDialog } from "./AddToCartDialog"
import { Link } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Stocks/CatalogPageItems/AddToCartDialog", () => {
  describe("initial render with one item in cart", () => {
    const props = {
      data: [
        {
          id: "DBS1234",
          label: "test strain",
          summary: "test summary",
        },
      ],
      setHover: jest.fn(),
      setCheckedItems: jest.fn(),
      dialogOpen: false,
      history: {},
    }
    const wrapper = shallow(<AddToCartDialog {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogTitle)).toHaveLength(1)
      expect(wrapper.find(DialogContent)).toHaveLength(1)
      expect(wrapper.find(DialogContentText)).toHaveLength(1)
      expect(wrapper.find(DialogActions)).toHaveLength(1)
      expect(wrapper.find(Link)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
