import React from "react";
import Home from "./Components/Home/home";
import DataContext, { ITEMS_ARRAY }  from "./data";

const App = () => {
  return (
    <DataContext.Provider value={ITEMS_ARRAY}>
      <Home></Home>
    </DataContext.Provider>
  );
};

export default App;
