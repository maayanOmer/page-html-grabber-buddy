
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface CareerPathProps {
  icon?: string | React.ReactNode;
  title: string;
}

const CareerPath: React.FC<CareerPathProps> = ({ icon, title }) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // If it's a string, check if it's a URL or emoji
      if (icon.startsWith('http') || icon.startsWith('/')) {
        return <img src={icon} alt={title} className="w-9 h-9 object-contain" />;
      }
      return <div className="text-3xl">{icon}</div>;
    }
    return icon || <TrendingUp size={36} className="text-primary" />;
  };

  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-3xl mb-3">{renderIcon()}</div>
        <h3 className="font-medium text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CareerPath;
