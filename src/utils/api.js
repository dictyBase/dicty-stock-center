//@flow

export const getStock = (url: string, id: string, type: string) => {
  let config = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  if (type === "strain") {
    return fetch(
      `${url}/stocks/${id}?include=characteristics,phenotypes,genotypes,publications`,
      config
    )
  } else if (type === "plasmid") {
    return fetch(`${url}/stocks/${id}?include=`)
  }
}
export const getPage = (
  url: string,
  page: string,
  size: string,
  type: string
) => {
  let config = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  return fetch(
    `${url}/stocks?filter[type]=${type}&page[number]=${page}&page[size]=${size}`,
    config
  )
}
export const searchStocks = (
  url: string,
  page: string,
  size: string,
  search: string,
  type: string
) => {
  let config = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  return fetch(
    `${url}/stocks?filter[type]=${type}&filter[id]=${search}
    &page[number]=${page}&page[size]=${size}`,
    config
  )
}
export const createUser = (url: string, values: Object) => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        type: "user",
        attributes: {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          organization: values.org,
          group: values.group,
          address: { first: values.address, second: values.address2 },
          city: values.city,
          state: values.state,
          zip: values.zip,
          country: values.country,
          phone: values.phone
        }
      }
    })
  }
  return fetch(`${url}/users`, config)
}
export const getUser = (url: string, id: string) => {
  let config = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  return fetch(`${url}/users/${id}`, config)
}

export const updateUser = (url: string, values: Object) => {
  let config = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        type: "user",
        id: values.email,
        attributes: {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          organization: values.org,
          group: values.group,
          address: { first: values.address, second: values.address2 },
          city: values.city,
          state: values.state,
          zip: values.zip,
          country: values.country,
          phone: values.phone
        }
      }
    })
  }
  return fetch(`${url}/users/${values.email}`, config)
}

// todo: dsc stocks and purchaser info
export const createOrder = (url: string, order: Object) => {
  const { shipping, payment, consumer, payer } = order
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        type: "order",
        attributes: {
          created: "",
          shipping: {
            account: shipping.account,
            account_num: shipping.accountNum,
            comments: shipping.comments
          },
          payment: {
            method: payment.method,
            purchase_order: payment.poNum
          },
          status: "Processing"
        },
        relationships: {
          stocks: {
            data: [{ type: "", id: "" }]
          },
          consumer: {
            data: {
              type: consumer.type,
              id: consumer.id
            }
          },
          payer: {
            data: {
              type: payer.type,
              id: payer.id
            }
          },
          purchaser: {
            data: {
              type: "",
              id: ""
            }
          }
        }
      }
    })
  }
  return fetch(`${url}/orders`, config)
}
