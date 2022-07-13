import React, { Component } from "react";

class Product extends Component {
  state = {
    quantity: this.props.product.quantity,
  };

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          className="btn btn-secondary ms-2"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => this.props.onDelete(this.props.product.id)}
        >
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
}

export default Product;
