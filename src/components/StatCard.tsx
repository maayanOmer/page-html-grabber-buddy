
import React from "react";

interface StatCardProps {
  percentage: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ percentage, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-4xl font-bold mb-2">{percentage}</h3>
      <p className="font-semibold text-lg mb-1">{title}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default StatCard;
