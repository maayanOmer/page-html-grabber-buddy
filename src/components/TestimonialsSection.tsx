
import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Patricia Seda",
      role: "Junior Data Analyst, Knyt",
      quote:
        "Taking the leap was life-changing, never imagined I would be working in tech so quickly. Forever thankful to Masterschool and the wonderful support I received.",
      stars: 5,
    },
    {
      name: "Antonija Mohar",
      role: "Business Intelligence Analyst, Deloitte",
      quote:
        "Switching careers felt less scary with Masterschool. It gave me the technical skills employers wanted and the mindset skills I didn't know I needed.",
      stars: 5,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          What are graduates are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
