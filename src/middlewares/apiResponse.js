import { JsonAPI } from "utils/apiClasses"

const apiResponse = store => next => action => {
  try {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        const userData = new JsonAPI(action.payload.json)
        next({ type: "LOGIN_SUCCESS", payload: { ...userData } })
        break
      case "FETCH_ROLE_SUCCESS":
        const roleData = new JsonAPI(action.payload.json)
        next({ type: "FETCH_ROLE_SUCCESS", payload: { ...roleData } })
        break
      case "FETCH_PERMISSION_SUCCESS":
        const permissionData = []
        action.payload.permissions.data.forEach(item => {
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
      // case "FETCH_PAGE_SUCCESS":
      //   const pageData = new JsonAPI(action.payload.json)
      //   const newPagePayload = pageData.json.data
      //   // console.log(newPagePayload)
      //   next({ type: "FETCH_PAGE_SUCCESS", payload: { ...newPagePayload } })
      //   break
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
