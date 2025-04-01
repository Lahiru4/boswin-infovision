
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-blue-50 to-rose-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-boswin-navy mb-4">
              The Cutting Edge <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-boswin-blue to-red-500">
                of Innovation
              </span>
            </h1>
            <p className="text-lg text-boswin-gray mb-8 max-w-lg">
              Boswin is an innovative technology development company, where the Boswin Group is a fast-paced limited liability conglomerate of companies based in Sri Lanka with networks in Hong Kong and China.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#focus-areas"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center gap-2"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact"
                className="border-2 border-boswin-blue text-boswin-blue hover:bg-boswin-blue hover:text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-boswin-blue to-red-500 rounded-lg blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="Technology innovation" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10 border-2 border-red-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
