import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, onDelete, product } = this.props;
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => onIncrement(product)}
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
          onClick={() => onDelete(product.id)}
        >
          X
        </button>
      </div>
    );
  }

  formatQuantity() {
    return this.props.product.quantity === 0
      ? "Zero"
      : this.props.product.quantity;
  }
  getBadgeClasses() {
    return this.props.product.quantity >= 1
      ? "btn btn-primary"
      : "btn btn-warning";
  }
}

export default Product;
