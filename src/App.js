import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Chinese: [
    { name: "Egg Chowmein", rating: "4/5" , healthIndex: "2/5"},
    { name: "Fried Rice", rating: "4.5/5", healthIndex: "2/5" }
  ],

  Indian: [
    {
      name: "Rajma Chawal",
      rating: "5/5",
      healthIndex: "4/5"
    },
    {
      name: "Idly",
      rating: "4.5/5",
      healthIndex: "4/5"
    }
  ],
  Italian: [
    {
      name: "Italian Pasta",
      rating: "3.5/5",
      healthIndex: "2/5"
    },
    {
      name: "Lasagna",
      rating: "5/5",
      healthIndex: "2/5"
    }
  ]
};

export default function App() {
  const [selectedFoodType, setFoodType] = useState("Italian");
  function foodtypeClickHandler(foodType) {
    setFoodType(foodType);
  }
  return (
    <div className="App">
      <h1> Favourite foods </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite foods. Select a type to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((foodType) => (
          <button
            onClick={() => foodtypeClickHandler(foodType)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {foodType}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedFoodType].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}>Taste rating: {food.rating} </div>
              <div style={{ fontSize: "smaller" }}>Health Index: {food.healthIndex} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
