
import React from "react";
import CareerPath from "./CareerPath";

const CareerPathsSection: React.FC = () => {
  const careerPaths = [
    {
      icon: "/lovable-uploads/bca7c78c-3d5d-4ce2-a101-9b103c0a2f2a.png",
      title: "Data Analytics",
      iconBgColor: "#F2F2EC",
      iconSize: { width: 56, height: 56 },
    },
    {
      icon: "/lovable-uploads/df1481a0-282f-4a9a-aa61-1dd04289b243.png",
      title: "Cybersecurity",
      iconBgColor: "#EBFFE7",
      iconSize: { width: 56, height: 56 },
    },
    {
      icon: "/lovable-uploads/33409539-3e22-46c1-ab8c-5ca228670010.png",
      title: "Web Development",
      iconBgColor: "#E4DCF7",
      iconSize: { width: 56, height: 56 },
    },
    {
      icon: "/lovable-uploads/9e8ee051-1d8a-49d6-a235-1b8aa9f69388.png",
      title: "Digital Marketing",
      iconBgColor: "#FFE3F7",
      iconSize: { width: 56, height: 56 },
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose your path to success
        </h2>
        <p className="text-center text-gray-600 mb-12 tracking-wide">
          8-14 months intensive training with industry experts
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {careerPaths.map((path, index) => (
            <CareerPath
              key={index}
              icon={path.icon}
              title={path.title}
              iconBgColor={path.iconBgColor}
              iconSize={path.iconSize}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathsSection;
