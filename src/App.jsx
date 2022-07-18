import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 8 },
      { id: 4, quantity: 11 },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar productCount={this.productCount()} />

        <Products
          products={products}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onDecrement={this.handleDecrement}
        />
      </>
    );
  }

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
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

  productCount() {
    const products = this.state.products.filter(
      (product) => product.quantity >= 1
    );
    return products.length;
  }
}

export default App;
