import React from "react"
import { shallow } from "enzyme"
import "../../setupTests"
import { PlasmidDetail } from "components/Plasmids/PlasmidDetail"
import StockDetailRow from "components/Strains/StockDetailRow"
import sinon from "sinon"
import { PrimaryBlockButton } from "styles"

describe("plasmids/PlasmidDetail", () => {
  const props = {
    match: {
      params: {
        id: "ID number",
      },
    },
    addToCart: sinon.spy(),
    fetchPlasmid: () => {},
    plasmid: {
      isFetching: false,
      name: "aca",
      genotypes: ["genotype 1", "genotype 2"],
      characteristics: "characteristics",
      id: "ID number",
    },
  }
  const wrapper = shallow(<PlasmidDetail {...props} />)
  it("should have 4 <StockDetailRow />s", () => {
    expect(wrapper.find(StockDetailRow)).toHaveLength(4)
  })
  it('should dispatch an action when "Add to Cart" button is clicked', () => {
    wrapper.find(PrimaryBlockButton).simulate("click")
    expect(props.addToCart.calledOnce).toEqual(true)
  })
})
