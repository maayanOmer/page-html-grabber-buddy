
import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Logo white />
          </div>
          <div className="text-sm">
            <p className="font-light text-gray-300">
              1% Mindspace, Münzstr. 12, 10178 Berlin
            </p>
            <p className="text-gray-400">
              © 2025 Masterschool. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
