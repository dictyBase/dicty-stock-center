import React from "react"
import { render, screen } from "@testing-library/react"
import OrderSummaryPDF from "./OrderSummaryPDF"
import mockValues from "../utils/mockValues"

describe("features/OrderForm/Submit/OrderSummaryPDF", () => {
  const items = [
    {
      fee: "30.00",
      id: "DBS0351365",
      name: "HL501/X55",
      summary: "heterozygote diploid tester strain; Parents: HL501 and X55",
    },
    {
      fee: "30.00",
      id: "DBS0351365",
      name: "HL501/X55",
      summary: "heterozygote diploid tester strain; Parents: HL501 and X55",
    },
    {
      fee: "15.00",
      id: "DBP0001068",
      name: "pSigK/lacZ",
      summary:
        "The construct was made by sub-cloning the DDB_G0267476 promoter as a 655 bp XbaI/BglII fragment into XbaI/BglII restricted pDdGal-17. This fragment consists of the region -632_+24 bp from the DDB_G0267476 start and restriction sites. This includes the full intergenic region before DDB_G0267476. The construct drives the expression of β-gal when activated; parental vector: pDdGAI-17; vector length: 9137 bp.",
    },
  ]
  const props = {
    formData: mockValues,
    cartItems: items,
    cartTotal: "$75.00",
    orderID: "123456789",
  }
  it("should display correct items", () => {
    render(<OrderSummaryPDF {...props} />)
    // strain should be listed twice (matches quantity in cart)
    expect(screen.getAllByText(items[0].id)).toHaveLength(2)
    // one plasmid
    expect(screen.getByText(items[2].id)).toBeInTheDocument()
    // correct total (30+30+15)
    expect(screen.getByText("$75.00")).toBeInTheDocument()
    // shows order ID
    expect(screen.getByText(`DSC Order #${props.orderID}`)).toBeInTheDocument()
  })
})
