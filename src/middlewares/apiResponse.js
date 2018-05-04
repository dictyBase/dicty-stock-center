const apiResponse = store => next => action => {
  try {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        // const userData = {
        //     type: user.data.type,
        //     id: user.data.id,
        //     first_name: user.data.attributes.first_name,
        //     last_name: user.data.attributes.last_name,
        //     email: user.data.attributes.email,
        //     organization: user.data.attributes.organization,
        //     group_name: user.data.attributes.group_name,
        //     first_address: user.data.attributes.first_address,
        //     second_address: user.data.attributes.second_address,
        //     city: user.data.attributes.city,
        //     state: user.data.attributes.state,
        //     zipcode: user.data.attributes.zipcode,
        //     country: user.data.attributes.country,
        //     phone: user.data.attributes.phone,
        //     is_active: true,
        //     created_at: user.data.attributes.created_at,
        //     updated_at: user.data.attributes.updated_at
        // }
        break
      case "FETCH_ROLE_SUCCESS":
        // const roleData = {
        //     type: role.data.type,
        //     id: role.data.id,
        //     role: role.data.attributes.role,
        //     description: role.data.attributes.description,
        //     created_at: role.data.attributes.created_at,
        //     updated_at: role.data.attributes.updated_at
        // }
        break
      case "FETCH_PERMISSION_SUCCESS":
        //   const permissions = {
        //     data: [
        //         type: permission.data.type,
        //         id: permission.data.id,
        //         permission: permission.data.attributes.id,
        //         description: permission.data.attributes.description,
        //         created_at: permission.data.attributes.created_at,
        //         updated_at: permission.data.attributes.updated_at,
        //         resource: permission.data.attributes.resource
        //     ]
        // }
        break
      case "FETCH_PAGE_SUCCESS":
        const pageData = {
          id: action.payload.json.data.id,
          slug: action.payload.json.data.attributes.slug,
          content: action.payload.json.data.attributes.content,
          created_at: action.payload.json.data.attributes.created_at,
          created_by: action.payload.json.data.attributes.created_by,
          updated_at: action.payload.json.data.attributes.updated_at,
          updated_by: action.payload.json.data.attributes.updated_by
        }
        next({ type: "FETCH_PAGE_SUCCESS", payload: { ...pageData } })
        break
      default:
        break
    }
    return next(action)
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("error in fetching data", err)
    }
  }
}

export default apiResponse
