
import React from "react";

interface LogoProps {
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white = false }) => {
  return (
    <div className="flex items-center">
      <span className={`mr-2 ${white ? "text-white" : "text-black"}`}>🎓</span>
      <span className={`font-bold text-lg ${white ? "text-white" : "text-black"}`}>Masterschool</span>
    </div>
  );
};

export default Logo;
