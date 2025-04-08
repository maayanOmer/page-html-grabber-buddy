
import React from "react";
import StatCard from "./StatCard";

const StatsSection: React.FC = () => {
  const stats = [
    {
      percent: "85%",
      title: "Placement Rate",
      description: "Graduates find jobs within one year",
    },
    {
      percent: "97%",
      title: "Retention Rate",
      description: "Students successfully complete the program",
    },
    {
      percent: "98%",
      title: "Satisfaction Rate",
      description: "Students report being very satisfied",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Our numbers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              percentage={stat.percent}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
