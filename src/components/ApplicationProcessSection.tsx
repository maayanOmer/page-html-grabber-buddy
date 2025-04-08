
import React from "react";
import ApplicationStep from "./ApplicationStep";

const ApplicationProcessSection: React.FC = () => {
  const applicationSteps = [
    {
      number: 1,
      title: "Check eligibility",
      description: "Complete our quick eligibility form",
      circleColor: "#E4DCF7",
    },
    {
      number: 2,
      title: "Speak with us",
      description: "Talk with our career consultants",
      circleColor: "#E4DCF7",
    },
    {
      number: 3,
      title: "Begin learning",
      description: "Join your cohort and start your journey",
      circleColor: "#E4DCF7",
    },
    {
      number: 4,
      title: "Land your role",
      description: "Get hired with our placement support",
      circleColor: "#E4DCF7",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Simple application process
        </h2>

        <div className="max-w-2xl w-fit mx-auto mt-12">
          {applicationSteps.map((step, index) => (
            <ApplicationStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              circleColor={step.circleColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
