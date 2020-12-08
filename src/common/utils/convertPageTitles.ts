const pageTitles = {
  "additional-materials": "Additional Materials",
  deposit: "Deposit Information",
  faq: "FAQs",
  "nomenclature-guidelines": "Nomenclature Guidelines",
  order: "Order Information",
  "other-stock-centers": "Other Stock Centers",
  payment: "Payment Information",
  shipping: "Shipping Information",
}

/**
 * pageTitleLookup gets a page name from the content API
 * and attempts to convert it to a more useful page title.
 */

const pageTitleLookup = (title: string) => {
  let name

  if (title in pageTitles) {
    // @ts-ignore
    name = pageTitles[title]
  } else {
    name = "Information Page"
  }
  return name
}

export { pageTitles, pageTitleLookup }
