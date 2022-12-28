import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './components/Checkout';
import Head from './components/Head';
import Home from './components/Home';
import Shop from './components/Shop';
import Shopitem from './components/Shopitem';


function App() {
  function addToCart(itemID, add) {
    if(!cart.hasOwnProperty(itemID)) {
      addItem({...cart, [itemID]: 1 })
    } else {
      if(add) {
        addItem({...cart, [itemID]: cart[itemID] + 1})
      } else {
        addItem({...cart, [itemID]: cart[itemID] - 1})
      }
    }
  }
  const [cart, addItem] = useState({})
  return (
    <>
    <BrowserRouter>
    <Head/>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/shop" exact element={<Shop handleCartUpdate={addToCart} />} />
    <Route path="/Checkout" exact element={<Checkout handleCartUpdate={addToCart} cart={cart} />} />
    <Route path='/shop/:id' exact element={<Shopitem handleCartUpdate={addToCart} />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
