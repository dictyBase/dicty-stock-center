const apiResponse = store => next => action => {
  try {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        const userData = {
          type: action.payload.user.data.type,
          id: action.payload.user.data.id,
          first_name: action.payload.user.data.attributes.first_name,
          last_name: action.payload.user.data.attributes.last_name,
          email: action.payload.user.data.attributes.email,
          organization: action.payload.user.data.attributes.organization,
          group_name: action.payload.user.data.attributes.group_name,
          first_address: action.payload.user.data.attributes.first_address,
          second_address: action.payload.user.data.attributes.second_address,
          city: action.payload.user.data.attributes.city,
          state: action.payload.user.data.attributes.state,
          zipcode: action.payload.user.data.attributes.zipcode,
          country: action.payload.user.data.attributes.country,
          phone: action.payload.user.data.attributes.phone,
          is_active: true,
          created_at: action.payload.user.data.attributes.created_at,
          updated_at: action.payload.user.data.attributes.updated_at
        }
        next({ type: "LOGIN_SUCCESS", payload: { ...userData } })
        break
      case "FETCH_ROLE_SUCCESS":
        const roleData = {
          type: action.payload.roles.data.type,
          id: action.payload.roles.data.id,
          role: action.payload.roles.data.attributes.role,
          description: action.payload.roles.data.attributes.description,
          created_at: action.payload.roles.data.attributes.created_at,
          updated_at: action.payload.roles.data.attributes.updated_at
        }
        next({ type: "FETCH_ROLE_SUCCESS", payload: { ...roleData } })
        break
      case "FETCH_PERMISSION_SUCCESS":
        const permissionData = []
        action.payload.permissions.data.forEach(item => {
          console.log(item)
          permissionData.push({
            type: item.type,
            id: item.id,
            permission: item.attributes.permission,
            description: item.attributes.description,
            created_at: item.attributes.created_at,
            updated_at: item.attributes.updated_at,
            resource: item.attributes.resource
          })
        })
        next({
          type: "FETCH_PERMISSION_SUCCESS",
          payload: [...permissionData]
        })
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
