import React from "react"
import Tooltip from "@material-ui/core/Tooltip"

export default function SimpleTableRowActions({ tableRowActions, row, index }) {
  return (
    <td className="table-row-fab">
      <div>
        {tableRowActions.map(
          ({ actionCallback, icon: IconComponent, label }) => {
            return (
              <Tooltip key={label} title={label} aria-label={label}>
                <IconComponent onClick={actionCallback(row, index)} />
              </Tooltip>
            )
          }
        )}
      </div>
    </td>
  )
}
