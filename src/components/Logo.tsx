
import React from "react";

interface LogoProps {
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white = false }) => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/ca8ab1ed-b46e-47e4-9bfc-04bc74584948.png" 
        alt="Masterschool Logo" 
        className={`h-6 ${white ? "filter brightness-0 invert" : ""}`} 
      />
    </div>
  );
};

export default Logo;
