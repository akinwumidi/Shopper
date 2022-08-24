import React, { Component } from 'react'
import { Kids, Men, Women, ProductsContainer } from "./containers";
import { Navbar, ProductsCard } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Kids></Kids>
        <Men></Men>
        <Women></Women>
        <ProductsContainer></ProductsContainer>
        <ProductsCard></ProductsCard>
      </div>
    )
  }
}

export default App
