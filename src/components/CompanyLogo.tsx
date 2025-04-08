
import React from "react";

interface CompanyLogoProps {
  imageUrl: string;
  name: string; // For alt text
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ imageUrl, name }) => {
  return (
    <div className="opacity-60 hover:opacity-100 transition-opacity">
      <img 
        src={imageUrl} 
        alt={`${name} logo`} 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default CompanyLogo;
