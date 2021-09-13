import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault(); //form doesn't relode if clicked
    //console.log(this.props.ingredients);

    //alert("You Continued");
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Ahnaf",
        address: {
          street: "Test Street",
          zipCode: "5545",
          country: "Bangladesh",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    //price should be calculated in server so that user can't manupulate in code
    axios
      .post("/orders.json", order)
      .then((respone) => {
        console.log(respone);
        //once the response is here
        this.setState({ loading: false });

        this.props.history.push("/"); //redirecting once the order is placed
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="emailt"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />

        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data: </h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
