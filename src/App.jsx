import React from "react";
import Home from "./Maincomponents/Home";
import SignUp from "./Maincomponents/SignUp";
import Login from "./Maincomponents/Login";
import Sellproduct from "./Maincomponents/Sellproduct";
import ProductDetails from "./Maincomponents/ProductDetails";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Authcontextprovider } from "./context/firebasecontext";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    <Authcontextprovider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sellproduct" element={<Sellproduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </PostContextProvider>
    </Authcontextprovider>
  );
}

export default App;
