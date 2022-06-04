import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import {ThemeContext} from "./context/ThemeContext"
import { useContext } from 'react';
import React from 'react';

function App() {
  const {islight}=useContext(ThemeContext)
  return (
    <div className={`App ${islight ?"light1":"dark"}`}>

      <Navbar></Navbar>
      <Body></Body>
     
    </div>
  );
}

export default App;
