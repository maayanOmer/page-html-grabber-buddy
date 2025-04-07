
import React from "react";

interface ProgramHighlightProps {
  icon: string;
  title: string;
  description: string;
}

const ProgramHighlight: React.FC<ProgramHighlightProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ProgramHighlight;
