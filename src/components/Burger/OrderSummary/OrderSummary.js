import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This component doesn't need to be a class component.

  componentWillUpdate() {
    console.log("[Order Summary] will update.");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <h3>Total Price: £{this.props.price.toFixed(2)}</h3>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          GO BACK
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
