import React from "react"
import { shallow } from "enzyme"
import "../../setupTests"
import { StrainDetail } from "./StrainDetail"
import StrainDetailRow from "./StockDetailRow"
import PhenotypeRow from "./PhenotypeRow"
import sinon from "sinon"
import { PrimaryBlockButton } from "styles"

describe("strains/StrainDetail", () => {
  const props = {
    match: {
      params: {
        id: "ID number",
      },
    },
    addToCart: sinon.spy(),
    fetchStrain: () => {},
    strain: {
      isFetching: false,
      name: "aca",
      genotypes: ["genotype 1", "genotype 2"],
      phenotypes: [
        {
          name: "phenotype name",
          observation: "phenotype observation",
          attribute: "attribute",
          notes: "value",
          evidence: "evidence",
          reference: "placeholder",
        },
        {
          name: "phenotype name",
          observation: "phenotype observation",
          attribute: "attribute",
          notes: "value",
          evidence: "evidence",
          reference: "placeholder",
        },
      ],
      characteristics: "characteristics",
      id: "ID number",
    },
    phenotypes: [
      {
        name: "phenotype name",
        observation: "phenotype observation",
        attribute: "attribute",
        notes: "value",
        evidence: "evidence",
        reference: "placeholder",
      },
      {
        name: "phenotype name",
        observation: "phenotype observation",
        attribute: "attribute",
        notes: "value",
        evidence: "evidence",
        reference: "placeholder",
      },
    ],
  }
  const wrapper = shallow(<StrainDetail {...props} />)
  it("should have 8 <StrainDetailRow />s", () => {
    expect(wrapper.find(StrainDetailRow)).toHaveLength(8)
  })
  it("has as many <PhenotypeRow />s as there are phenotypes", () => {
    expect(wrapper.find(PhenotypeRow)).toHaveLength(
      props.strain.phenotypes.length,
    )
  })
  it('should dispatch an action when "Add to Cart" button is clicked', () => {
    wrapper.find(PrimaryBlockButton).simulate("click")
    expect(props.addToCart.calledOnce).toEqual(true)
  })
})
