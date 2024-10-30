import React from 'react'
import Nav from './components/Nav/Nav';
import HomeContainer from './container/HomeContainer.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'; // Landing page
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'; // Cart page
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css'

function App() {
  
return(
  <div className="App">
      <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<LandingPage />} />

{/* Product Listing Page Route */}
<Route path="/products" element={<HomeContainer />} />

{/* Shopping Cart Page Route */}
<Route path="/cart" element={<ShoppingCart />} />
</Routes>
      </Router>

  </div>
);
}
export default App


