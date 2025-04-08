import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Logo from "@/components/Logo";
import TestimonialCard from "@/components/TestimonialCard";
import ProgramHighlight from "@/components/ProgramHighlight";
import StatCard from "@/components/StatCard";
import CareerPath from "@/components/CareerPath";
import ApplicationStep from "@/components/ApplicationStep";
import CompanyLogo from "@/components/CompanyLogo";
import { TrendingUp } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const highlights = [
    {
      icon: "/lovable-uploads/51f9eca3-6474-47b2-9f17-99c136093f28.png",
      title: "Zero Upfront Cost",
      description: "100% tuition covered by Bildungsgutschein for eligible German residents"
    },
    {
      icon: "/lovable-uploads/e9efe02c-f4f1-4763-9354-94cbe94948f8.png",
      title: "Career Transformation",
      description: "From any background to in-demand tech careers"
    },
    {
      icon: "/lovable-uploads/a6439422-b96a-420e-b721-bf4d8c93ddd9.png",
      title: "Success-Focused",
      description: "Curriculum designed for job market readiness"
    }
  ];

  const stats = [
    {
      percent: "85%",
      title: "Placement Rate",
      description: "Graduates find jobs within one year"
    },
    {
      percent: "97%",
      title: "Retention Rate",
      description: "Students successfully complete the program"
    },
    {
      percent: "98%",
      title: "Satisfaction Rate",
      description: "Students report being very satisfied"
    }
  ];

  const testimonials = [
    {
      name: "Patricia Seda",
      role: "Junior Data Analyst, Knyt",
      quote: "Taking the leap was life-changing, never imagined I would be working in tech so quickly. Forever thankful to Masterschool and the wonderful support I received.",
      stars: 5
    },
    {
      name: "Antonija Mohar",
      role: "Business Intelligence Analyst, Deloitte",
      quote: "Switching careers felt less scary with Masterschool. It gave me the technical skills employers wanted and the mindset skills I didn't know I needed.",
      stars: 5
    }
  ];

  const careerPaths = [
    {
      icon: "/lovable-uploads/bca7c78c-3d5d-4ce2-a101-9b103c0a2f2a.png",
      title: "Data Analytics",
      iconBgColor: "#F2F2EC",
      iconSize: { width: 56, height: 56 }
    },
    {
      icon: "/lovable-uploads/df1481a0-282f-4a9a-aa61-1dd04289b243.png",
      title: "Cybersecurity",
      iconBgColor: "#EBFFE7",
      iconSize: { width: 56, height: 56 }
    },
    {
      icon: "/lovable-uploads/33409539-3e22-46c1-ab8c-5ca228670010.png",
      title: "Web Development",
      iconBgColor: "#E4DCF7",
      iconSize: { width: 56, height: 56 }
    },
    {
      icon: "/lovable-uploads/9e8ee051-1d8a-49d6-a235-1b8aa9f69388.png",
      title: "Digital Marketing",
      iconBgColor: "#FFE3F7",
      iconSize: { width: 56, height: 56 }
    }
  ];

  const applicationSteps = [
    {
      number: 1,
      title: "Check eligibility",
      description: "Complete our quick eligibility form",
      circleColor: "#E4DCF7"
    },
    {
      number: 2,
      title: "Speak with us",
      description: "Talk with our career consultants",
      circleColor: "#E4DCF7"
    },
    {
      number: 3,
      title: "Begin learning",
      description: "Join your cohort and start your journey",
      circleColor: "#E4DCF7"
    },
    {
      number: 4,
      title: "Land your role",
      description: "Get hired with our placement support",
      circleColor: "#E4DCF7"
    }
  ];

  const companies = ["Deloitte", "Intel", "eBay", "NVIDIA", "Microsoft", "Meta"];

  return (
    <div className="flex flex-col min-h-screen bg-sand">
      <header className="w-full py-6 bg-white">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>

      <section className="w-full py-8 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Avatar>
                  <AvatarImage src="/lovable-uploads/2c573e4b-8667-4dfd-b2f2-672f039446b0.png" alt="Student" />
                  <AvatarFallback className="bg-gray-300"></AvatarFallback>
                </Avatar>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <div className="w-full h-full bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <div className="w-full h-full bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="ml-2 flex flex-col items-start">
              <a 
                href="https://www.trustpilot.com/review/masterschool.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <div className="text-sm text-green-600 flex items-center">
                  ★★★★★ 
                  <span className="ml-2 text-gray-500 font-light text-xs">4.8 / 5</span>
                </div>
              </a>
              <span className="text-xs text-gray-400">500+ Trustpilot reviews</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            You've been gifted €500 to<br />start your tech journey
          </h1>
          
          <p className="text-gray-600 mb-8">
            Join one of our long-term career training programs and receive €500 as a welcome reward.
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
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)} 
              />
              <label htmlFor="terms" className="text-sm text-gray-500">
                I agree to <a href="#" className="underline">Terms & Conditions</a>
              </label>
            </div>
          </div>
        </div>
      
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <CompanyLogo key={index} name={company} />
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">The world's leading companies hire our graduates</p>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Program highlights</h2>
          
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

      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">What are graduates are saying</h2>
          
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

      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Choose your path to success</h2>
          <p className="text-center text-gray-600 mb-12">8-14 months intensive training with industry experts</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <CareerPath 
                key={index} 
                icon={path.icon} 
                title={path.title} 
                iconBgColor={path.iconBgColor} 
                iconSize={path.iconSize}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Simple application process</h2>
          
          <div className="max-w-2xl mx-auto mt-12">
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

      <footer className="w-full py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <Logo white />
            </div>
            <div className="text-sm">
              <p className="font-bold">1% Mindspace, Münzstr. 12, 10178 Berlin</p>
              <p className="text-gray-400">© 2025 Masterschool. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
