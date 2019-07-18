import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import ShoppingCartItemsTable from "./ShoppingCartItemsTable"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("ShoppingCart/ShoppingCartItemsTable", () => {
  const spy = sinon.spy()
  describe("initial render with strains", () => {
    const props = {
      classes: {},
      items: [
        {
          id: "DBS123",
          name: "test1",
          fee: "$30.00",
        },
        {
          id: "DBS456",
          name: "test2",
          fee: "$30.00",
        },
      ],
      removeItem: spy,
      stock: "Strains",
    }
    const wrapper = shallow(<ShoppingCartItemsTable {...props} />).dive()

    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Table)).toHaveLength(1)
      expect(wrapper.find(TableHead)).toHaveLength(1)
      expect(wrapper.find(TableBody)).toHaveLength(1)
      // one header row and one data row per item
      expect(wrapper.find(TableRow)).toHaveLength(3)
      // should be four cells per row
      expect(wrapper.find(TableCell)).toHaveLength(12)
      // one trash icon per row
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      // one trash button per row
      expect(wrapper.find(Button)).toHaveLength(2)
      // one link per row in table body
      expect(wrapper.find(Link)).toHaveLength(2)
    })
    it("renders correct Strains header", () => {
      const target = <Grid>Strains</Grid>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })

    describe("removing an item", () => {
      it("should remove an item on click", () => {
        const button = wrapper.find(Button).first()
        button.simulate("click")
        expect(spy.calledOnce).toBe(true)
      })
    })
  })

  describe("initial render with plasmids", () => {
    const props = {
      classes: {},
      items: [
        {
          id: "DBP123",
          name: "test1",
          fee: "$15.00",
        },
        {
          id: "DBP456",
          name: "test2",
          fee: "$15.00",
        },
      ],
      removeItem: spy,
      stock: "Plasmids",
    }
    const wrapper = shallow(<ShoppingCartItemsTable {...props} />).dive()

    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Table)).toHaveLength(1)
      expect(wrapper.find(TableHead)).toHaveLength(1)
      expect(wrapper.find(TableBody)).toHaveLength(1)
      // one header row and one data row per item
      expect(wrapper.find(TableRow)).toHaveLength(3)
      // should be four cells per row
      expect(wrapper.find(TableCell)).toHaveLength(12)
      // one trash icon per row
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
      // one trash button per row
      expect(wrapper.find(Button)).toHaveLength(2)
      // one link per row in table body
      expect(wrapper.find(Link)).toHaveLength(2)
    })
    it("renders correct Plasmids header", () => {
      const target = <Grid>Plasmids</Grid>
      expect(wrapper.containsMatchingElement(target)).toBe(true)
    })
  })
})
