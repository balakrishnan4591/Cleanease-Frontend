import React, { useContext } from "react";
import "./ServiceDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServiceDisplay = ({ category }) => {
  try {
    const { service_list_details } = useContext(StoreContext);

    return (
      <div className="service-display" id="service-display">
        <h2>Top services near you</h2>
        <div className="service-display-list">
          {service_list_details.map((service, index) => {
            if (category === "All" || category === service.category) {
              return (
                <ServiceItem
                  key={index}
                  id={service._id}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  image={service.image}
                />
              );
            }
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
};

export default ServiceDisplay;
