import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, onDelete, product, onDecrement } = this.props;
    return (
      <div className="container m-2">
        <div className="row">
          <div className="col-1">
            <div className={this.getBadgeClasses()}>
              {this.formatQuantity()}
            </div>
          </div>
          <span className="col">
            <button
              className="btn btn-secondary me-2"
              onClick={() => onIncrement(product)}
            >
              +
            </button>
            <button
              className={this.disabled()}
              onClick={() => onDecrement(product)}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(product.id)}
            >
              X
            </button>
          </span>
        </div>
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
      ? "btn btn-primary me-2"
      : "btn btn-warning me-2";
  }

  disabled() {
    return this.props.product.quantity === 0
      ? "btn btn-secondary disabled me-2"
      : "btn btn-secondary me-2";
  }
}

export default Product;
