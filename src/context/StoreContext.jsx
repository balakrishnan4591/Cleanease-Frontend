import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { service_list_details } from "../assets/asset";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [service_list_details, setServiceListDetails] = useState([]);

  const addToCart = (serviceId) => {
    if (!cartItems[serviceId]) {
      setCartItems((prev) => ({ ...prev, [serviceId]: 1 }));
    }
  };

  const removeFromCart = (serviceId) => {
    setCartItems((prev) => ({ ...prev, [serviceId]: prev[serviceId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const service in cartItems) {
      if (cartItems[service] > 0) {
        let serviceInfo = service_list_details.find(
          (product) => product._id === service
        );
        totalAmount += serviceInfo.price * cartItems[service];
      }
    }
    return totalAmount;
  };

  const fetchServiceList = async () => {
    const response = await axios.get(url + "/api/service/list");
    setServiceListDetails(response.data.data);
  };

  //prevent logout during a page refresh
  useEffect(() => {
    async function loadData() {
      await fetchServiceList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    service_list_details,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
