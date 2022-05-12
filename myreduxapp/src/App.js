import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProductListing from './components/ProductListing';
import ProductComponent from './components/ProductComponent';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import {ToastContainer} from "react-toastify";
 
function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path="/cart" exact element={<Cart/>}/>
          {/* <Route path="/not-found" element={<NotFound/>}/> */}
          <Route path="/" exact element={<ProductListing/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>  
        
      
    </div>
  );
}

export default App;
