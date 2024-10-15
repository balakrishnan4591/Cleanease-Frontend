import { createContext, useEffect, useState } from "react";
import { service_list_details } from "../assets/asset";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (serviceId) => {
    if (!cartItems[serviceId]) {
      setCartItems((prev) => ({ ...prev, [serviceId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [serviceId]: prev[serviceId] + 1 }));
    }
  };

  const removeFromCart = (serviceId) => {
    setCartItems((prev) => ({ ...prev, [serviceId]: prev[serviceId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    service_list_details,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
