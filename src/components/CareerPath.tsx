
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface CareerPathProps {
  icon?: string | React.ReactNode;
  title: string;
  iconBgColor?: string;
  iconSize?: {
    width: number;
    height: number;
  };
}

const CareerPath: React.FC<CareerPathProps> = ({ 
  icon, 
  title, 
  iconBgColor = "transparent", 
  iconSize = { width: 36, height: 36 } 
}) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // If it's a string, check if it's a URL or emoji
      if (icon.startsWith('http') || icon.startsWith('/')) {
        return (
          <div 
            className="rounded-full flex items-center justify-center mb-3" 
            style={{ 
              backgroundColor: iconBgColor,
              width: iconSize.width, 
              height: iconSize.height 
            }}
          >
            <img 
              src={icon} 
              alt={title} 
              className="object-contain" 
              style={{ 
                maxWidth: iconSize.width * 0.7, 
                maxHeight: iconSize.height * 0.7 
              }} 
            />
          </div>
        );
      }
      return <div className="text-3xl mb-3">{icon}</div>;
    }
    return (
      <div className="mb-3">
        {icon || <TrendingUp size={36} className="text-primary" />}
      </div>
    );
  };

  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6 flex flex-col items-center text-center">
        {renderIcon()}
        <h3 className="font-medium text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default CareerPath;
