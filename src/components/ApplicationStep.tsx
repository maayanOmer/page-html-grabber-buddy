
import React from "react";

interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
  circleColor?: string; // Optional prop for circle background color
}

const ApplicationStep: React.FC<ApplicationStepProps> = ({ 
  number, 
  title, 
  description,
  circleColor = "#f3f4f6" // Default color if none provided
}) => {
  return (
    <div className="flex items-start mb-6 last:mb-0">
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 text-gray-800 font-bold"
        style={{ backgroundColor: circleColor }}
      >
        {number}
      </div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ApplicationStep;
