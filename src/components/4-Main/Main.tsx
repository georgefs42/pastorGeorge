import React from "react";
import "./main.css";
import cards from "./cardsData"; // Import the card data

const Main: React.FC = () => {
  return (
    <div id='main' className="main">
      <div className="header">
        <h1>Tjänster</h1>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src="https://via.placeholder.com/200" alt={`Image for ${card.title}`} className="card-image" />
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
