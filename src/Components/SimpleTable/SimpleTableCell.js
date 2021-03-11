import TableCell from "@material-ui/core/TableCell"
import React from "react"

const SimpleTableCell = React.memo(function __SimpleTableCell({
  cellData,
  tableCellProps = {},
}) {
  return (
    <TableCell align="right" {...tableCellProps}>
      {cellData}
    </TableCell>
  )
})

export default SimpleTableCell
