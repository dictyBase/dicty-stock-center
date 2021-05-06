import { User, Role, Permission, Maybe } from "dicty-graphql-schema"

type CartItem = {
  /** Stock ID */
  id: string
  /** Stock name (label/descriptor) */
  name: string
  /** Stock summary */
  summary: string
  /** Price of stock */
  fee: string
}

type CartItemWithQuantity = {
  /** Quantity of a given item in the cart */
  quantity: number
} & CartItem

type UpdatedByUser = Pick<User, "id" | "email" | "first_name" | "last_name"> & {
  roles?: Maybe<
    Array<
      { __typename?: "Role" } & Pick<Role, "role"> & {
          permissions?: Maybe<
            Array<
              { __typename?: "Permission" } & Pick<
                Permission,
                "permission" | "resource"
              >
            >
          >
        }
    >
  >
}

export type { CartItem, CartItemWithQuantity, UpdatedByUser }
