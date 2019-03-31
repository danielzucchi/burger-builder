import React, { Component } from "react"
import Button from "../../../components/UI/Button/Button"
import Spinner from "../../../components/UI/Spinner/Spinner"
import classes from "./ContactData.css"
import axios from "../../../axios-orders"

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postcode: ""
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Daniel Zucchi",
        address: {
          street: "123 Test Street",
          postcode: "A1 2B",
          country: "UK"
        },
        email: "test@test.com"
      },
      deliveryMethod: "Fast"
    }
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false })
        console.log(res, this.props.ingredients, this.props.price)
        this.props.history.push("/")
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
  }

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postcode"
          placeholder="Postcode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your details</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
