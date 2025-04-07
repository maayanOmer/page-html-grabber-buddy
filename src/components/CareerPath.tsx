
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CareerPathProps {
  icon: string;
  title: string;
}

const CareerPath: React.FC<CareerPathProps> = ({ icon, title }) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-medium text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CareerPath;
