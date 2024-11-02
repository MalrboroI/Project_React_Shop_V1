import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar'
import APPROUTER from "./components/APPROUTER";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <APPROUTER />
    </BrowserRouter>
  );
}
