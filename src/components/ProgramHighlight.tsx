
import React from "react";

interface ProgramHighlightProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

const ProgramHighlight: React.FC<ProgramHighlightProps> = ({ icon, title, description }) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // If it's a string, check if it's a URL or emoji
      if (icon.startsWith('http') || icon.startsWith('/')) {
        return <img src={icon} alt={title} className="w-12 h-12 object-contain" />;
      }
      return <div className="text-4xl">{icon}</div>;
    }
    return icon;
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{renderIcon()}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ProgramHighlight;
