import React from "react";
import Home from "./Components/Home/home";
import CartContextProvider from "./Components/store/CartContextProvider";
import DataContext, { ITEMS_ARRAY } from "./data";

const App = () => {
  return (
    <DataContext.Provider value={ITEMS_ARRAY}>
      <CartContextProvider>
        <Home />
      </CartContextProvider>
    </DataContext.Provider>
  );
};

export default App;
