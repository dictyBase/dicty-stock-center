const requiredShippingFields = [
  "firstName",
  "lastName",
  "email",
  "organization",
  "lab",
  "address1",
  "city",
  "zip",
  "country",
  "phone",
  "shippingAccountNumber",
]

const requiredPaymentFields = [
  "payerFirstName",
  "payerLastName",
  "payerEmail",
  "payerOrganization",
  "payerLab",
  "payerAddress1",
  "payerCity",
  "payerZip",
  "payerCountry",
  "payerPhone",
  "purchaseOrderNum",
]

const requiredFieldsGenerator = (values: any, page: string) => {
  if (page === "shipping") {
    return requiredShippingFields.map<string>(item => values[item])
  }
  return requiredPaymentFields.map<string>(item => values[item])
}

export default requiredFieldsGenerator
