
import React from "react";

interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
}

const ApplicationStep: React.FC<ApplicationStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex mb-8 items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ApplicationStep;
