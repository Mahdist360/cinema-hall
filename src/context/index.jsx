/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer, useState } from "react";

const initialState = { cart: [] };

export const CartContext = createContext();
export const ThemeContext = createContext();

import React from "react";
import { cartReducer } from "../reducers/cartreducer";

const Provider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [theme, setTheme] = useState("night");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ cartState, dispatch }}>
        {children}
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Provider;
