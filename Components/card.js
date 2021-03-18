import React from "react";
import "/src/card.css";
import { Button } from "/Components/button";

function card({ title, imageurl, body, calories }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageurl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        <div classname="card-title">
          <h4>Caloric Density (kcal) : {calories} </h4>
        </div>
      </div>
      <div className="btn">
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >
          Add to cart
        </Button>
        <Button
          onClick={() => {
            console.log("You clicked!");
          }}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >
          Share
        </Button>
      </div>
    </div>
  );
}

export default card;
