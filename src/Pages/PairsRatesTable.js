import React from "react"
import DeleteIcon from "@material-ui/icons/DeleteOutline"
import EditIcon from "@material-ui/icons/EditOutlined"
import SimpleTable from "../Components/SimpleTable/SimpleTable"

function PairsRatesTable({ fee, feeDecimalPrecision }) {
  const [data, setData] = React.useState([
    {
      name: "EURUSD",
      currencies: ["EUR", "USD"],
      rate: 1.15,
      decimalPrecision: 4,
    },
    {
      name: "EURARS",
      currencies: ["EUR", "USD"],
      rate: 108.3,
      decimalPrecision: 4,
    },
    {
      name: "USDARS",
      currencies: ["EUR", "USD"],
      rate: 96.1,
      decimalPrecision: 4,
    },
    {
      name: "EURBRL",
      currencies: ["EUR", "USD"],
      rate: 18.4,
      decimalPrecision: 4,
    },
    {
      name: "USDBRL",
      currencies: ["EUR", "USD"],
      rate: 15.6,
      decimalPrecision: 4,
    },
    {
      name: "BRLARS",
      currencies: ["EUR", "USD"],
      rate: 5.6,
      decimalPrecision: 4,
    },
  ])

  const [tableColumns] = React.useState([
    {
      name: "Pair",
      typeValue: "string",
      datafield: "name",
      tableCellProps: { align: "left" },
    },
    { name: "Rate", typeValue: "string", datafield: "rate" },
    { name: "Fee %", typeValue: "string", datafield: "fee" },
    { name: "Fee amount", typeValue: "string", datafield: "fee_amount" },
    { name: "Rate with Fee", typeValue: "string", datafield: "rate_with_fee" },
  ])

  const [tableRowActions] = React.useState([
    {
      label: "Edit",
      actionCallback: (row, index) => (event) => {
        console.log("edit", row, index)
      },
      icon: EditIcon,
    },
    {
      label: "Delete",
      actionCallback: (row, index) => (event) => {
        console.log("delete", row, index)
      },
      icon: DeleteIcon,
    },
  ])

  React.useEffect(() => {
    setData((data) =>
      data.map((row) => ({
        ...row,
        fee: fee.toFixed(2),
        fee_amount: ((row.rate * fee) / 100).toFixed(row.decimalPrecision),
        rate_with_fee: ((row.rate * (100 + fee)) / 100).toFixed(
          row.decimalPrecision
        ),
      }))
    )
  }, [fee])

  return (
    <SimpleTable
      data={data}
      tableColumns={tableColumns}
      tableRowActions={tableRowActions}
      fee={fee}
      feeDecimalPrecision={feeDecimalPrecision}
    />
  )
}

export default PairsRatesTable
