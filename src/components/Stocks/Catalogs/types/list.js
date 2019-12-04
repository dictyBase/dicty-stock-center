type listItemProps = {
  index: number,
  style: Object,
  data: {
    item: Array<{
      label: string,
      id: string,
      summary: string,
    }>,
  },
  cartItems: Array<Object>,
  removeItem: Function,
}

export { listItemProps }
