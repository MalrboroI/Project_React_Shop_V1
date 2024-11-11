import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import "./components/styles/Main.css";

export const Context = createContext(null); // перекидываем состояние в компоненты

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    {/* Оборачиваем в переменную с использованием метода .Provider */}
    <Context.Provider
      value={{
        user: new UserStore(), // создадим новый объект с использованием метода new
        product: new ProductStore(),
      }}
    >
      <App />
    </Context.Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
