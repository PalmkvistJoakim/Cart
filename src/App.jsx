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
        <NavBar productCount={products.length} />

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

  handleDecrement = () => {
    this.setState({ quantity: this.state.quantity - 1 });
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
}

export default App;
