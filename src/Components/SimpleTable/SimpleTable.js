import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SimpleTableRowActions from "./SimpleTableRowActions"
import SimpleTableHead from "./SimpleTableHead"
import SimpleTableCell from "./SimpleTableCell"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function SimpleTable({
  tableColumns,
  tableRowActions,
  data,
  fee,
  feeDecimalPrecision,
}) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <SimpleTableHead tableColumns={tableColumns} />
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.name} className="table-row">
              {tableColumns.map((col) => {
                if (typeof col.datafield === "string") {
                  return (
                    <SimpleTableCell
                      key={col.datafield}
                      tableCellProps={col.tableCellProps}
                      cellData={row[col.datafield]}
                    />
                  )
                }
                throw new Error("datafield should be a string")
              })}
              <SimpleTableRowActions
                row={row}
                tableRowActions={tableRowActions}
                index={index}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SimpleTable
