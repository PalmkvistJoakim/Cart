import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 8 },
      { id: 4, quantity: 11 },
    ],
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }

  handleDecrement = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };
}

export default Products;
