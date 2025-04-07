
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface CareerPathProps {
  icon?: string | React.ReactNode;
  title: string;
}

const CareerPath: React.FC<CareerPathProps> = ({ icon, title }) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-3xl mb-3">
          {typeof icon === 'string' ? icon : icon || <TrendingUp size={36} className="text-primary" />}
        </div>
        <h3 className="font-medium text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CareerPath;
