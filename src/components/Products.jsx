import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { onReset, onDelete, onIncrement, products, onDecrement } =
      this.props;
    return (
      <div className="m-4">
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
