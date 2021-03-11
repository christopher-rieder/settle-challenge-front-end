import "./App.css"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"
import PairsRatesTable from "./Pages/PairsRatesTable"

const useStylesApp = makeStyles({
  feeInputField: {
    backgroundColor: "white",
  },
})

function App() {
  const classes = useStylesApp()
  // in percentage. 0.15%, 100->fee:0,15
  const [fee, setFee] = React.useState(0.15)
  // decimal precision showed to the user (it doesn't change, round or truncate the original data)
  const [feeDecimalPrecision, setFeeDecimalPrecision] = React.useState(2)
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          inputProps={{
            step: 0.01,
          }}
          onChange={(event) => setFee(Number(event.target.value))}
          value={fee}
          className={classes.feeInputField}
        />
        <PairsRatesTable fee={fee} feeDecimalPrecision={feeDecimalPrecision} />
      </header>
    </div>
  )
}

export default App
