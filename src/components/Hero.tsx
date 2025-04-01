
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-rose-50 to-rose-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Hero Content */}
          <div className="relative z-10 animate-fade-in max-w-3xl">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-red-500 bg-red-50 rounded-full">
              Innovative Technology Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block">The Future of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                Technology Innovation
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 mx-auto max-w-xl">
              Boswin is a technology development company with global reach, driving innovation and creating cutting-edge solutions for tomorrow's challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white gap-2"
                size="lg"
                asChild
              >
                <a href="#focus-areas">
                  Explore Solutions
                  <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-500"
                size="lg"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          {/* Image with Modern Effects */}
          <div className="relative mt-16 max-w-2xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            
            {/* Main image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-300/30 to-red-500/30 rounded-2xl blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="Technology innovation" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 border-2 border-red-100"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-5 -left-5 bg-white p-4 rounded-lg shadow-lg z-20 rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 rounded-full w-3 h-3"></div>
                  <p className="font-medium">Global Network</p>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-20 -rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 rounded-full w-3 h-3"></div>
                  <p className="font-medium">Cutting Edge Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
