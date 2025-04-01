
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-black relative"
    >
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Red accent elements - exactly 10% visual presence */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-red-600/20 blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-red-600/10 blur-3xl z-0"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          {/* Modern badge/tag */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <span className="text-white/80 text-sm font-medium">Technology Developer</span>
          </div>
          
          {/* Clean, modern heading with red accent */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Future of <span className="text-red-600">Technology</span> Is Here
          </h1>
          
          {/* Concise description with proper white contrast (30%) */}
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            A conglomerate based in Sri Lanka with global networks, dedicated to innovation and technological excellence.
          </p>
          
          {/* Red accent CTA button (part of the 10% red allocation) */}
          <div className="pt-6">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-md transition-all duration-300 flex items-center gap-2 text-base h-auto shadow-lg shadow-red-600/20"
              onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Our Solutions
              <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Simple scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
