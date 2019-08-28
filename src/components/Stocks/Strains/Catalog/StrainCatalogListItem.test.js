import React from "react"
import { shallow } from "enzyme"
import { StrainCatalogListItem } from "./StrainCatalogListItem"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import Hidden from "@material-ui/core/Hidden"
// import IconButton from "@material-ui/core/IconButton"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import AddToCartButton from "components/Stocks/CatalogPageItems/AddToCartButton"

describe("Stocks/Strains/Catalog/StrainCatalogListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            id: "DBS1234",
            label: "test strain",
            summary: "test summary",
          },
        ],
        checkedItems: [
          {
            id: "DBS1234",
            label: "test strain",
            summary: "test summary",
          },
        ],
        handleCheckboxChange: jest.fn(),
      },
      cartItems: [
        { id: "DBS1234", label: "test strain", summary: "test summary" },
      ],
      index: 0,
      style: {},
    }
    const wrapper = shallow(<StrainCatalogListItem {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid)).toHaveLength(7)
      expect(wrapper.find(Hidden)).toHaveLength(3)
      expect(wrapper.find(Checkbox)).toHaveLength(1)
      expect(wrapper.find(Typography)).toHaveLength(3)
      expect(wrapper.find(Link)).toHaveLength(1)
    })
  })
})
