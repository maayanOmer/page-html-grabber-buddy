
import React from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import ProgramHighlightsSection from "@/components/ProgramHighlightsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareerPathsSection from "@/components/CareerPathsSection";
import ApplicationProcessSection from "@/components/ApplicationProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sand">
      <header className="w-full py-6 bg-white">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>

      <HeroSection />
      <ProgramHighlightsSection />
      <StatsSection />
      <TestimonialsSection />
      <CareerPathsSection />
      <ApplicationProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
