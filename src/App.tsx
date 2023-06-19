import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./state/store";
import { socket } from "./socket";

import Orders from "./pages/Orders";
import Products from "./pages/Products/Products";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    !isConnected && socket.connect();
    setIsConnected(true);
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route path={"/orders_and_products"} element={<Orders />} />
        <Route path={"/orders"} element={<Orders />} />
        <Route path={"/groups"} element={<Products />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/users"} element={<Products />} />
        <Route path={"/settings"} element={<Products />} />
      </Routes>
    </Provider>
  );
}

export default App;
