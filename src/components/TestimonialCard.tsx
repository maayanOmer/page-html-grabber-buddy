
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, stars }) => {
  return (
    <Card className="bg-gray-100 border-0">
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-gray-700 italic mb-4">"{quote}"</p>
          <div className="text-yellow-400">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
