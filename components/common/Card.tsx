import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={image} alt={title} className="rounded-md mb-3 w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
