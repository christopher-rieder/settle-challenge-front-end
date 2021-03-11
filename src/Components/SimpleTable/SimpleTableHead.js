import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React from "react"

const SimpleTableHead = React.memo(function __SimpleTableHead({
  tableColumns,
}) {
  return (
    <TableHead>
      <TableRow>
        {tableColumns.map(({ name, tableCellProps = {} }) => {
          return (
            <TableCell key={name} align="right" {...tableCellProps}>
              {name}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
})

export default SimpleTableHead
