import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>

        <input type="eamil" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Counrtry" />
        </div>

        <input type="text" placeholder="Phone" />

      </div>
      <div className="place-order-right"></div>
    </form>
  );
};

export default PlaceOrder;
