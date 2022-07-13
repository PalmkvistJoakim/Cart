import React, { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <>
        <div className="navbar bg-light w-25 m-3 p-4 fs-2">Navbar</div>
        <div className="ms-5 m-4">
          <Products />
        </div>
      </>
    );
  }
}

export default App;
