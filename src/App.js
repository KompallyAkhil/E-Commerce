import React from 'react';
import Navigation from './Components/Navbar/Navigation';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Product/Products';
import { Route, Routes } from 'react-router-dom';
import Electronics from './Components/ProductElements/Electronics';
import TVAppliances from './Components/ProductElements/TV&Appliances';
import Fashion from './Components/ProductElements/Fashion';
import HomeKitchen from './Components/ProductElements/Home&Kitchen';
import Furniture from './Components/ProductElements/Furniture';
import DisplayDyanmic from './Components/Dynamic/DisplayDynamic';
import DisplayDynamicElectronics from './Components/Dynamic/DisplayDynamicElectronics';
import DisplayDynamicFashion from './Components/Dynamic/DisplayDynamicFashion';
import DisplayDynamicFurniture from './Components/Dynamic/DisplayDynamicFurniture';
import DisplayDynamicHomeKitchen from './Components/Dynamic/DisplayDynamicHome&Kitchen';
import DisplayDynamicTVAppliances from './Components/Dynamic/DisplayDynamicTVAppliances';
import DisplayDynamicHHomepage from './Components/Dynamic/DisplayDynamicHomepage';
import UserCart from './Components/Cart/UserCart';
import { CartProvider } from './context/CartContext';
function App() {
  return (<>
    <CartProvider />
    <Navigation />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/home' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/mycart' element={<UserCart />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Electronics' element={<Electronics />}></Route>
      <Route path='/TV&Appliances' element={<TVAppliances />}></Route>
      <Route path='/Fashion' element={<Fashion />}></Route>
      <Route path='/Home&Kitchen' element={<HomeKitchen />}></Route>
      <Route path='/Furniture' element={<Furniture />}></Route>
      <Route path='/products/:id/:Title' element={<DisplayDyanmic />}></Route>
      <Route path='/Electronics/:id/:Title' element={<DisplayDynamicElectronics />}></Route>
      <Route path='/Fashion/:id/:Title' element={<DisplayDynamicFashion />}></Route>
      <Route path='/Furniture/:id/:Title' element={<DisplayDynamicFurniture />}></Route>
      <Route path='/Home&Kitchen/:id/:Title' element={<DisplayDynamicHomeKitchen />}></Route>
      <Route path='/TVAppliances/:id/:Title' element={<DisplayDynamicTVAppliances />}></Route>
      <Route path='/home/:id/:Title' element={<DisplayDynamicHHomepage/>}></Route>
    </Routes>
  </>
  );
}

export default App;
