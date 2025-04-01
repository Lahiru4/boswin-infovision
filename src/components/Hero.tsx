
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-black relative"
    >
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Red accent element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-red-600/20 blur-3xl z-0"></div>
      <div className="absolute bottom-12 -left-24 w-64 h-64 rounded-full bg-red-600/10 blur-3xl z-0"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Simple badge */}
          <div className="inline-block bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/80 text-sm mb-4 border border-white/10">
            Technology Developer
          </div>
          
          {/* Clean, bold heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            The Future of <span className="text-red-600">Technology</span> Is Here
          </h1>
          
          {/* Concise description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A conglomerate based in Sri Lanka with global networks, dedicated to innovation and technological excellence.
          </p>
          
          {/* Single, focused CTA */}
          <div className="pt-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md transition-all duration-300 flex items-center gap-2 text-lg h-auto"
              onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Our Solutions
              <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={() => document.getElementById('focus-areas')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/60 hover:text-white/90 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
