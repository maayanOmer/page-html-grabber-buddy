
import React from "react";

interface CompanyLogoProps {
  name: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ name }) => {
  return (
    <div className="opacity-60 hover:opacity-100 transition-opacity">
      <span className="text-gray-400 font-light">{name}</span>
    </div>
  );
};

export default CompanyLogo;
