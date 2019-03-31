import React from "react"
import classes from "./Order.css"

const order = props => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>Price: </p>
    <strong>£8.00</strong>
  </div>
)

export default order
