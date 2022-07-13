import React, { Component } from "react";

class Product extends Component {
  state = {
    quantity: 0,
  };

  render() {
    return (
      <div>
        <span class={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button class="btn btn-secondary" onClick={this.handleIncrement}>
          +
        </button>
        <button class="btn btn-secondary" onClick={this.handleDecrement}>
          -
        </button>
        <button class="btn btn-danger" onClick={this.handleDelete}>
          X
        </button>
      </div>
    );
  }

  formatQuantity() {
    return this.state.quantity === 0 ? "Zero" : this.state.quantity;
  }
  getBadgeClasses() {
    return this.state.quantity >= 1 ? "btn btn-primary" : "btn btn-warning";
  }

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrement = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  handleDelete = () => {
    this.setState({ quantity: this.state.quantity });
  };
}

export default Product;
