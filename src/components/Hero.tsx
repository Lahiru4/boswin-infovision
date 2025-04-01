
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-boswin-navy/90 via-boswin-navy/80 to-black/70 z-0"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
          alt="Technology background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            Innovative Technology Development Company
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Cutting Edge of <span className="text-transparent bg-clip-text bg-gradient-to-r from-boswin-blue to-boswin-teal">Innovation</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            A fast-paced conglomerate based in Sri Lanka with networks in Hong Kong and China, 
            dedicated to making a technological difference in the world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-boswin-blue hover:bg-boswin-teal text-white px-8 py-6 rounded-md transition-all duration-300 flex items-center gap-2 text-lg h-auto"
              onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-md transition-colors duration-300 backdrop-blur-sm text-lg h-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Floating stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-3xl font-bold text-boswin-blue">2006</p>
              <p className="text-white/70">Established</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-3xl font-bold text-boswin-teal">3+</p>
              <p className="text-white/70">Global Locations</p>
            </div>
            <div className="hidden md:block bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-3xl font-bold text-boswin-blue">10+</p>
              <p className="text-white/70">Industries Served</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#focus-areas" className="text-white/70 flex flex-col items-center">
          <span className="mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
