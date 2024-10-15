import React from "react";
import "./ExploreService.css";
import { service_list } from "../../assets/asset";

const ExploreService = ({ category, setCategory }) => {
  return (
    // <div className="container-fluid">
    <div className="explore-service" id="explore-service">
      <h1>Explore our cleaning service</h1>
      <p className="explore-service-text">
        you can select on eof these services and make use of our work
      </p>
      <div className="explore-service-list">
        {service_list.map((service, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === service.service_name ? "All" : service.service_name
                )
              }
              key={index}
              className="explore-service-list-item"
            >
              <img
                className={category === service.service_name ? "active" : ""}
                src={service.service_image}
                alt=""
              />
              <p>{service.service_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
    // </div>
  );
};

export default ExploreService;
