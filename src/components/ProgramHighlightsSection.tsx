
import React from "react";
import ProgramHighlight from "./ProgramHighlight";

const ProgramHighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: "/lovable-uploads/51f9eca3-6474-47b2-9f17-99c136093f28.png",
      title: "Zero Upfront Cost",
      description:
        "100% tuition covered by Bildungsgutschein for eligible German residents",
    },
    {
      icon: "/lovable-uploads/e9efe02c-f4f1-4763-9354-94cbe94948f8.png",
      title: "Career Transformation",
      description: "From any background to in-demand tech careers",
    },
    {
      icon: "/lovable-uploads/a6439422-b96a-420e-b721-bf4d8c93ddd9.png",
      title: "Success-Focused",
      description: "Curriculum designed for job market readiness",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Program highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <ProgramHighlight
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlightsSection;
