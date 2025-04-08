
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CompanyLogo from "./CompanyLogo";

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const companies = [
    {
      name: "Deloitte",
      imageUrl: "/lovable-uploads/a94219ff-9bbd-4646-b0d9-8f4d8fc2bf56.png",
    },
    {
      name: "Intel",
      imageUrl: "/lovable-uploads/1d5b7c98-d329-4928-a5d4-d600d760ad98.png",
    },
    {
      name: "eBay",
      imageUrl: "/lovable-uploads/ce8fe417-e19c-4477-b637-78555fd6680b.png",
    },
    {
      name: "NVIDIA",
      imageUrl: "/lovable-uploads/84bea954-8202-4c86-a785-47967d24b545.png",
    },
    {
      name: "Microsoft",
      imageUrl: "/lovable-uploads/4dc01572-1e8b-4ea7-9592-d277fcc989cf.png",
    },
    {
      name: "Meta",
      imageUrl: "/lovable-uploads/e5ea8f22-deae-478d-97c8-877c2ae8ebf6.png",
    },
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-2">
            <Avatar>
              <AvatarImage
                src="../../public/avatar-images/Ellipse 1.webp"
                alt="Student"
              />
              <AvatarFallback className="bg-gray-300"></AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="../../public/avatar-images/Ellipse 2.webp"
                alt="Student"
              />
              <AvatarFallback className="bg-gray-300"></AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="../../public/avatar-images/Ellipse 3.webp"
                alt="Student"
              />
              <AvatarFallback className="bg-gray-300"></AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-2 flex flex-col items-start">
            <a
              href="../../public/avatar-images/ellipse 1.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <div>
                <div className="text-sm text-green-600 flex items-center">
                  ★★★★★
                  <span className="ml-2 text-gray-500 font-light text-xs">
                    4.8 / 5
                  </span>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                500+ Trustpilot reviews
              </span>
            </a>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          You've been gifted €500 to
          <br />
          start your tech journey
        </h1>

        <p className="text-gray-600 mb-8">
          Join one of our long-term career training programs and receive €500
          as a welcome reward.
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-black mb-4">
            Check if you qualify
            <span className="ml-2">→</span>
          </Button>

          <div className="flex items-center justify-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) =>
                setAgreeToTerms(checked as boolean)
              }
            />
            <label htmlFor="terms" className="text-xs text-gray-500">
              I agree to{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <CompanyLogo
              key={index}
              imageUrl={company.imageUrl}
              name={company.name}
            />
          ))}
        </div>
        <p className="text-center text-xs font-light text-gray-500 mt-4">
          The world's leading companies hire our graduates
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
