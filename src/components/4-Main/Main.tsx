// Main.tsx
import React from 'react';
import './main.css';
import cardsData from './cardsData'; // Import card data from the JS file
import { FaChurch, FaHome, FaChild, FaChalkboardTeacher } from 'react-icons/fa'; // Import icons from react-icons

interface CardProps {
  title: string;
  icon: string;
  description: string;
}

const iconMap: { [key: string]: React.ComponentType } = {
  FaChurch,
  FaHome,
  FaChild,
  FaChalkboardTeacher,
};

const Card: React.FC<CardProps> = ({ title, icon, description }) => {
  const IconComponent = iconMap[icon] || FaChurch; // Default to FaChurch if icon is not found

  return (
    <div className="card-container">
      <div className="card-icon">
        <IconComponent className="icon" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <h1 className="subtitle">Tjänster</h1> <br /> {/* Heading added here */}
      <div className="app-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
