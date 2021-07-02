import React from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Character from "./components/character";


function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
     <Character />
    </Provider>
  );
}

export default App;
