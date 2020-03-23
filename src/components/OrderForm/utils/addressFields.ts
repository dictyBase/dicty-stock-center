let fields = [
  {
    name: "firstName",
    field: "First Name",
    required: true,
  },
  {
    name: "lastName",
    field: "Last Name",
    required: true,
  },
  {
    name: "email",
    field: "Email",
    required: true,
  },
  {
    name: "organization",
    field: "Organization",
    required: true,
  },
  {
    name: "lab",
    field: "Lab/Group",
    required: true,
  },
  {
    name: "phone",
    field: "Phone Number",
    required: true,
  },
  {
    name: "address1",
    field: "Address",
    required: true,
  },
  {
    name: "address2",
    field: "Address",
    required: false,
  },
  {
    name: "city",
    field: "City",
    required: true,
  },
  {
    name: "state",
    field: "State/Province",
    required: false,
  },
  {
    name: "zip",
    field: "Zip Code",
    required: true,
  },
]

const addressFieldsGenerator = (page: string) => {
  let addressFields = fields
  if (page === "Payment") {
    addressFields = fields.map(item => ({
      name: `payer${item.name.charAt(0).toUpperCase()}${item.name.substring(
        1,
      )}`,
      field: item.field,
      required: item.required,
    }))
  }
  return addressFields
}

export default addressFieldsGenerator
