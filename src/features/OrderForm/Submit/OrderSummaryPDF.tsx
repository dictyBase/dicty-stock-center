import React from "react"
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"
import { getShippingValues, getPaymentValues } from "../utils/getListValues"
import { FormikValues } from "../utils/initialValues"
import { CartItem } from "common/types"

const styles = StyleSheet.create({
  body: {
    display: "flex",
    margin: 20,
  },
  title: {
    padding: 8,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#004080",
    color: "#fff",
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
  },
  header: {
    flexGrow: 1,
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  subheader: {
    fontSize: 18,
  },
  leftPanel: {
    width: "50%",
  },
  rightPanel: {
    width: "50%",
  },
  italic: {
    fontStyle: "italic",
  },
})

type Props = {
  /** Object containing all entered form data */
  formData: FormikValues
  /** All items from this order */
  cartItems: CartItem[]
  /** Total cost of items in cart */
  cartTotal: string
  /** Order ID number */
  orderID: string
}

const OrderSummaryPDF = ({
  formData,
  cartItems,
  cartTotal,
  orderID,
}: Props) => (
  <Document title="DSC Order Summary">
    <Page size="A3">
      <View style={styles.body}>
        <View style={styles.title}>
          <Text>DSC Order #{orderID}</Text>
        </View>
        <View style={styles.header}>
          <Text>Order Summary</Text>
        </View>
        <View>
          {cartItems.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.name}</Text>
                <Text style={styles.italic}>{item.id}</Text>
              </View>
            )
          })}
          <Text>Total: {cartTotal}</Text>
        </View>
        <View style={styles.header}>
          <Text>Shipping and Billing Information</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.leftPanel}>
            <Text style={styles.subheader}>Shipping Address</Text>
            {getShippingValues(formData).map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
          <View style={styles.rightPanel}>
            <Text style={styles.subheader}>Payment Details</Text>
            {getPaymentValues(formData).map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default OrderSummaryPDF
