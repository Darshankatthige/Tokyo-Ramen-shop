import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './views/Home/Home'
import { ShopDetails } from "./views/ShopDetails/ShopDetails";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Suspense>
          <Routes>
            <Route exact path="/" name="Home" element={<Home />} />  
            <Route exact path="/shop" name="shopDetails" element={<ShopDetails />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
      </div>
  );
}

export default App;
