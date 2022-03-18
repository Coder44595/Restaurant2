    import React from 'react';
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    // import Cart from './components/Cart';
    import NavbarComp from './components/NavbarComp';
    import { CartProvider } from "react-use-cart";
    // import Cart from './components/Cart';
    import './App.css';
// import { Menu } from '@material-ui/core';



    function App() {

  return (
    
    <>
   
    
   
    
    <CartProvider>
    <NavbarComp/>
  
     {/* <Cart/>  */}
    </CartProvider>

    </>
);
}     

export default App;