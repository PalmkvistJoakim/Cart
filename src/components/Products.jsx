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
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };
}

export default Products;
