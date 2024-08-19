import React from "react";
import "./App.css";
import Provider from "./context";
import Page from "./page";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Provider>
        <Page />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
